---
path: tech/reduce
date: 2020-04-15T13:52:25.666Z
title: Membuat ulang reduce function
tags:
  - tech
thumbnail: /assets/js_800x800.jpg
type: tech
description: >-
  jadi ceritanya, gw kmarin sempet interview di salah satu startup di
  singapore.. dah waktu interview itu gw dpt 1 pertanyaan yang gw gabisa jawab,
  tapi menurut gw menarik.. jadi gw disuruh buat ulang reduce function..
  akhirnya kelar interview karna gw penasaran gw langsung coba gugling, dan ga
  nemu nemu jawabanya.. yaudahlah gw coba coba sendiri
---

jadi ceritanya, gw kmarin sempet interview di salah satu startup di singapore.. dah waktu interview itu gw dpt 1 pertanyaan yang gw gabisa jawab, tapi menurut gw menarik.. jadi gw disuruh buat ulang reduce function.. akhirnya kelar interview karna gw penasaran gw langsung coba gugling, dan ga nemu nemu jawabanya.. yaudahlah gw coba coba sendiri

jadi langsung aja gw kasih tau gimana cara gw

```javascript
Array.prototype.reduceBoongan = function(callback, initValue) {
  let arr = this.valueOf()
  let total = initValue ? initValue : arr[0]
  for (let i = initValue ? 0 : 1; i < arr.length; i++) {
    total = callback(total, arr[i], i, arr)
  }
  return total
}
```

Ok, sekarang gw bakal jelesin 1 per 1..
perama coba liat disni
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
reduce terdiri dari callback sama initialValue, nah callbacknya sendiri punya 4 parameter yaitu accumulator, currentValue,index, dan array..

sbelumnya bahkan gw aja taunya parameter callback itu isinya cuma total sama currentValue.. gimana bisa ngerjain ini pertanyaan ==”

Ok, lanjut..

Array.prototype.reduceBoongan = function (callback, initValue) {
Sesuai dengan petunjuk diatas kita bikin fungsi dengan 2 parameter yaitu callback dan initValue

```javascript
let total = initValue ? initValue : arr[0]
```

disini kita cek, apakah punya initValue atau ga, kalo ga kita pake item pertama dari array sebagai initial value

```javascript
for (let i = initValue ? 0 : 1; i < arr.length; i++) {
```

nah, disini kita juga cek apakah ada initvalue, kalo tidakada karna kita pakai item pertama sebagai initial value maka kita akan mulai dari index ke 1, sedangkan kalo gada kita mulai dari index ke 0

```javascript
total = callback(total, arr[i], i, arr)
```

sekarang kita simpan hasil callback di variable total, dan kasih arguments sesuai ketentuan parameter diatas (accumulator,currentValue,index, dan array)

Nah.. sekarang tinggal return dan bisa di test

```javascript
const a = [1, 2, 3, 4]
a.reduce((a, b) => a + b)
//will return 10
a.reduceBoongan((a, b) => a + b)
//will return 10

a.reduce((a, b) => a + b, "hello")
//will return hello1234
a.reduceBoongan((a, b) => a + b, "hello")
//will return hello1234
```

jadi.. apakah ini jawaban terbaik? tentu tidak ferguso.. ini cuma jawaban versi gw.. pasti masih ada error2 dikit (mungkin), kalo ada jawaban yg lebih bagus bisa coba kasih tau nanti saya apdet..

Ok segitu dulu aja post bikin ulang reduce function ini.. terima kasih
