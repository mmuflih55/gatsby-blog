---
path: tech/flutterWeb
date: 2019-11-17T16:57:52.118Z
title: Mencoba Flutter Web
tags: ["tech", "info"]
thumbnail: /assets/google-flutter-logo.png
type: tech
description: Pengalaman mencoba flutter web
---

Jadi ceritanya gw udah lama ga apdet flutter, udah denger flutter web dari lama tapi blom smpet coba.. kenapa? karena gw kira ribet kan bikin nya.. eh pas baca baca artikel tentang flutter web ini akhirnya gw tertarik coba lagi.. nah pas gw baca disini
<https://flutter.dev/docs/get-started/web>
ternyata bikin nya simple juga.. cuma perlu masuk channel dev, update flutter nya, trus kasih config biar support web, kelar..
nah kalo lu udah pernah bikin project flutter sebelumnya, di project nya.. tinggal jalanin

```
 flutter create --org [package-name] .
```

nah di case gw, gw ada project lama pas iseng iseng belajar flutter, tampilanya gini

![](/assets/screen-shot-2019-11-17-at-22.55.31.png)

nah setelah gw build jadi flutter web, taraaaa~~~

![](/assets/screen-shot-2019-11-17-at-23.45.51.png)

**Tidak semudah itu ferguso~~**
gatau kenapa fetchingnya ga jalan, mau solve errornya tapi terlalu mager..
yaudah lah.. karena gw pikir gw cuma mau coba gimana performa flutter web akhirnya bikin project baru trus build web

![](/assets/screen-shot-2019-11-18-at-00.17.40.png)

nah hasilnya bakal kayak gitu.. jadi kayak bener bener tampilan mobilenya, yang berarti **web kita bakal keliatan kayak apps mobile dengan ukuran browser**, nah untuk performanya sendiri bisa di liat hasil audit lighthouse

![](/assets/screen-shot-2019-11-17-at-23.54.17.png)

Score nya menengah lah.. dan belum support PWA.. (tapi udah banyak plugin tersedia buat pasang Service Worker) jadi menurut gw ya flutter ini belum jadi solusi untuk web..

penasaran kenapa gitu amat

![](/assets/screen-shot-2019-11-18-at-00.23.45.png)

Ternyata flutter web ini emang blom siap untuk produksi.. jadi ya masih banyak bug bug lah..

kalo udah lancar paling PR(pekerjaan rumah, bukan pull request) kita ya bikin tampilan yang bisa masuk buat desktop (dibalik dulu kan web desktop yang responsive sama tampilan web, lol)

Jadi dari gw kesimpulanya, flutter web ini lumayan menarik, masalah service worker buat PWA juga udah banyak plugin nya.. tapi blom siap pake aja skrg, masih banyak bug nya.. ya mungkin beberapa bulan lagi lah bakal asoy geboy. meski performance nya ttp kalah sama framework web bneranya..
