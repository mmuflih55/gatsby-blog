---
path: next-and-gatsby
date: 2020-06-15T17:45:16.113Z
title: Next dan Gatsby bedanya apa?
tags: ["info", "react"]
thumbnail: /assets/react.png
type: tech
description: perbedaan Next dan Gatsby
---

Ini mungkin tulisan rada ga penting, iseng aja gw nambah nambah tulisan biar keliatan banyak.. tapi lumayan lah buat yang baru belajar react buat tau..
karena dulu awal belajar gw juga sempet bingung.. React, Gatsby, Next apaan sih bedanya? yang gw tau cuma Gatsby dan Next itu digunain buat SSR

Seperti yang kita tau, problema utama pake Client-rendered Application kayak react dan vue adalah SEO, kita gabisa modifikasi head nya sehingga sulit web kita buat keindex sama mesin pencari.. (google dulu gabisa, tapi skrg udah bisa index setau gw)

jadi.. kapan kita perlu pake SSR framework kayak Next atau Nuxt? kalo menurut gw ya jelas saat kita butuh SEO, contohnya: Company profile, atau web jualan.. karena ga mungkin kan di web gituan halaman utama kita doang yang keindex.. misalnya buat web jualan, kita kan juga pengen halaman halaman product kita keindex.. untuk itu lah kita perlu SSR.. makanya agak ga ngerti juga kmarin sempet ada client minta dibikinin admin dashboard pake Next.. faedahnya apa yak? kan admin dashboard untuk keperluan internal.. gabakal diindex juga

nah di React sendiri buat masalah SSR salah satu solusinya adalah pake Gatsby atau pake Next.. balik lagi ke topik awal, bedanya apa? ternyata kalo Gatsby itu Static Site Generator, sedangkan Next beneran Server Rendered Page

Plusnya pake Gatsby, lebih simple.. banyak template template website yg disediakan, plugin nya juga banyak. karna hasil berupa static site, host juga gampang.. bahkan pake github pages aja bisa..
Minusnya, semakin gede dan banyak kontent website lu, semakin lama built time nya.. karena makin banyak yang harus dia bundle saat built time

Nah, buat Next kita bakal buat server yang run diatas nodejs, dari server itu kita bakal serve page sesuai yang di minta ke server.. nah karna perlu node environtment, kita harus deploy ke hostingan yang bisa support node, contohnya heroku, vercel, gcp dll\
tapi sebenernya next ini bisa juga buat Static Site Generator kaya Gatsby, cuma gatau kenapa kalah populer sama gatsby buat Static Site Generatornya

Udah ah.. Segitu dulu, terima kasih kalo udah baca sampe abis
