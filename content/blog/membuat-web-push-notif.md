---
path: webpushnotif
date: 2020-09-15T11:19:07.487Z
title: Membuat Web Push Notif
tags:
  - tech
  - info
thumbnail: assets/367-3673273_process-icon-service-worker-logo.png
type: tech
description: Pengalaman gw membuat push notif untuk web dengan backend node js
---
Jadi gw dpt tugas yg memerlukan sebuah notif, dan setelah berdiskusi akhirnya diputuskanlah buat pake push notif karena kebutuhanya simple juga.. jadilah gw explore gimana bikinya..\
btw, sebelum lanjutin baca gw mau ngasih tau dulu disini gw pake backend node js, dan blm pernah coba dengan bahasa lainnya..

ok.. jadi, buat bikin push notif simplenya sbnernya cuma butuh beberapa fungsi yaitu [showNotification](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification) dan [subscription](https://developer.mozilla.org/en-US/docs/Web/API/PushManager/subscribe) untuk di client side, dan  sendNotification dari lib [web-push](https://github.com/web-push-libs/web-push)

o iya sperti yang kalian liat [showNotification](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification) dan [subscription](https://developer.mozilla.org/en-US/docs/Web/API/PushManager/subscribe) perlu service worker untuk jalanin fungsinya, jadi kalian cuma bisa pake fungsi ini kalo kalian udah pasang service worker di web kalian

simplenya, sebenernya munculin notif di browser itu cuma perlu

```javascript
​serviceWorkerRegistration.showNotification(title, [options]);
```

Tapi itu cuma berlaku buat munculin notifnya aja.. nah, gimana kalo kita pengen request show notif dari server?\
yang kita perluin:

1. **Subscription**

   ok, kalo kalian udah pasang service worker di web kalian, kalian bisa coba panggil

   ```javascript
          const options = { applicationServerKey, userVisibleOnly: true };
          const subscription = await sw.pushManager.subscribe(options);
   ```

   nah buat dapetin applicationServerKey kalian bisa pake lib web-push, cara installnya tinggal

   ```
    npm install web-push -g
   ```

   kemudian kalian run command

   ```
   web-push generate-vapid-keys
   ```

   kalo udah kalian bakal dpt hasil kayak gini

   ```
   =======================================

   Public Key:
   BMcLB-   hC5z3mKdmc01vGroo2BRc7y9PaHoqVk5And21bgDTL3FMKaViEvxc_e3eIcsKSTpz114VQfkNpxU7u8v8

   Private Key:
   WL0wpGzCdIMFIvxNs8HBOOziBCDk5Sba51u72uIk25E

   =======================================
   ```

   trus kalian taro public kalian untuk applicationServerKey diatas

   nah kalo udah, return dari subcribe tadi bisa kalian kirim ke backend trus kalian simpen.

   kalo gw sih simpen di table users aja, biar gampang aja.. jadi misal butuh kirim notif si username 'A' tinggal `select subscribe from users where username = 'A'`
2. **PushNotif dari server**

   nah selanjutnya, untuk backendnya misal gw buat sendNotif.js

   ```javascript
   import webpush from "web-push";

   export const pushNotif = async (subs, title, msg) => {
     const vapidKeys = {
       publicKey:
      "BMcLB-hC5z3mKdmc01vGroo2BRc7y9PaHoqVk5And21bgDTL3FMKaViEvxc_e3eIcsKSTpz114VQfkNpxU7u8v8",
       privateKey: "WL0wpGzCdIMFIvxNs8HBOOziBCDk5Sba51u72uIk25E",
     };
     try {
       const subject = '< \'mailto\' Address or URL >'
       webpush.setVapidDetails(subject, vapidKeys.publicKey, vapidKeys.privateKey);
       await webpush.sendNotification(subs,JSON.stringify({ title: title, msg: msg }));
     } catch (e) {
       if (e.statusCode != 410) console.log(e);
     }
   };
   ```

   public dan private key kita dapat dari hasil generate diatas, subject sesuai dari sini [web-push](https://github.com/web-push-libs/web-push) bisa diisi url ato email

   nah cara pakenya jadi tinggal

   ```javascript
   import { pushNotif } from "../sendNotif";

   //terus kalian tinggal query buat ambil subs trus panggil fungsi tadi buat pake
   pushNotif(subs,"Ini judul,"Ini isi pesan")
   ```
3. **Listen push masuk di service worker**

   untuk step ini , kalian cuma perlu nambahin ini di sw kalian

   ```javascript
   self.addEventListener("push", function (event) {
     if (event.data) {
       const { title, msg } = event.data.json();
       self.registration.showNotification(title, {
         body: msg,
       });
     }
   });
   ```

**Kelar deh~**

segitu dulu tulisan kali ini, maap ga rapih.. namanya juga masih belajar 😜