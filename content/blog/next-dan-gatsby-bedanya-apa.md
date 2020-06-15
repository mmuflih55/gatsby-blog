---
path: next-and-gatsby
date: 2020-06-15T17:45:16.113Z
title: Next dan Gatsby bedanya apa?
tags:
  - tech
  - info
thumbnail: /assets/react.png
type: tech
description: perbedaan Next dan Gatsby
---
Ini mungkin tulisan rada ga penting, iseng aja gw nambah nambah tulisan biar keliatan banyak.. tapi lumayan lah buat yang baru belajar react buat tau..\
karena dulu awal belajar gw juga sempet bingung.. React, Gatsby, Next apaan sih bedanya? yang gw tau cuma Gatsby dan Next itu digunain buat SSR

ternyata bedanya adalah Gatsby itu Static site generator sedangkan Next itu semacem server rendered page.\
sperti yang kita tau, problema utama pake Client-rendered Application kayak react dan vue adalah SEO, kita gabisa modifikasi head nya sehingga sulit web kita buat keindex sama mesin pencari.. (google  dulu gabisa, tapi skrg udah bisa index setau gw)

jadi.. kapan kita perlu pake SSR framework kayak  Next atau Nuxt? kalo menurut gw ya jelas saat kita butuh SEO, contohnya: Company profile, atau web jualan.. karena ga mungkin kan di web gituan halaman utama kita doang yang keindex.. misalnya buat web jualan, kita kan juga pengen halaman halaman product kita keindex.. untuk itu lah kita perlu SSR.. makanya agak ga ngerti juga kmarin sempet ada client minta dibikinin admin dashboard pake Next.. faedahnya apa yak? kan admin dashboard untuk keperluan internal.. gabakal diindex juga
