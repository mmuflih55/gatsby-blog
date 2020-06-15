---
path: tech/twa
date: 2019-11-13T15:24:56.771Z
title: TWA? Makanan macam apa itu??
tags:
  - tech
  - info
thumbnail: /assets/logo2.png
type: tech
description: Pengalaman mencoba Trusted Web Activity...
---

**Jadi, apa sih TWA itu?**

di era tren nya PWA saat ini, google mengluarkan technologi baru disebut TWA (Trusted web Activity), yaitu teknologi untuk menghubungkan applikasi dengan web PWA dengan cara meggunakan custom tabs, sehingga kita bisa upload PWA kita ke playstore, dan karna isi apk ini sbnernya hanya custom tabs dan asset2 (icon, splash dll) size app kita di playstore bisa sangat kecil (ratusan kb)

**gimana cara membuat TWA?**

1. **harus punya web PWA**
   PWA itu apa sih? ini kalo gw ngobrol sama orang ato ada orang yang nanyain "bisa bikin PWA ga?", gw biasanya pasti langsung jawab "PWA yang kaya gimana?", kenapa? karena menurut gw persepsi orang tentang PWA masih beda beda.
   PWA sendiri itu kan artinya web yang terlihat dan berlaku seperti mobile Apps, disini emang rada ambigu.. ada beberapa orang bilang web yang bisa menyesuaikan antara tampilan mobile dengan desktop itu PWA,
   tapi bagi gw itu ya responsive web.
   ada juga yang bilang web yang SPA itu PWA. nah kalo buat gw sndiri PWA itu kalo web udah responsive, SPA (transisi smooth lah), dan juga udah mendukung service working jadi web ada cache sehingga bisa jalan offline dll.
   nah kalo web yang udah bisa di kategorikan PWA buat TWA ini sndiri gimana? jawabanya gada requirement tertentu asal sudah memenuhi kualifikasi ' Add to Home Screen'
2. **buat project android**
   ini panjang sih.. detailnya ada disini:
   <https://developers.google.com/web/updates/2019/02/using-twa>

**terus gimana pendapat gw tentang TWA? apa teknologi ini akan menggantikan framework hybrid seperti cordova?**
jawabanya gw rasa sih ngga.. (ato seenggaknya belom), kenapa?

1. **TWA gabisa buat akses native function ke web state kita**
   jadi, ga kaya cordova yang bungkus webview kita dan bisa akses native function kayak camera dll kemudian dikirim ke web kita. nah TWA ini kayak cuma bungkus PWA kita aja.. meski gw baca2 bisa komunikasi via url (get) tapi ya mnurut gw itu masih terbatas banget.. paling ya bisa pake function yang bisa kepake ya kayak push notif
2. **TWA (mungkin baru) cuma ada di Android**
   sama kayak PWA yang add to Homescreen nya baru di android, TWA ga bikin PWA lu bisa di upload ke App Store
   (mungkin ada yg bilang bisa juga kok di iOS, tapi ttp aja menurut gw sensasi(?) nya beda sama di android, kalo di iOS kan cuma kayak bookmark aja, beda sama android)
3. **kesimpulanya buat gw TWA adalah PWA, tapi bisa masuk ke playstore**
   dengan setup yang cukup meribetkan (buat gw), Experience yang ga beda jauh sama 'add to Homescreen' PWA, mnurut gw sih ga worth2 amat buat bikin TWA
   tapi inget ini pendapat gw pribadi, kesanya negatif mulu emang.. tapi bisa jadi ini gw kurang info ato kurang research aja lol

Ok sekian pembahasan tentang TWA, terima kasih sudah membaca.. semoga membantu

O iya, buat yang penasaran TWA yang gw buat bisa di cek disini:
<https://play.google.com/store/apps/details?id=com.mmuflih>
