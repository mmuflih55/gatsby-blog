---
path: tutor/fetchwithhooks
date: 2019-11-10T01:13:56.024Z
title: Penggunaan useEffect untuk fetching data
tags: ["react", "tutorial"]
thumbnail: /assets/react.png
type: tech
description: Contoh penggunaan useEffect untuk fetching data
---

Halo, sebenernya ini tutorial ga penting penting amat karna sebenernya udah ada di dokumentasi react, tapi karna orang indo biasanya males males baca artikel luar dan gw bingung mau nulis apa, yaudah bikin ginian aja.. lol

ok. pertama apa itu useEffetct?
useEffect adalah API pengganti buat componentDidMount dan componentDidUpdate. pada defaultnya useEffect akan dijalankan setiap pertama kali render, dan setiap ada update

untuk contoh pertama kita pake contoh yang ada di dokumentasinya aja karna gw mager bikin contoh lain lol

```javascript
const Example = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
}
```

nah contoh diatas adalah script buat agar setiap count berubah, judul halaman juga berubah..
jadi, ketika setCount dijalankan, maka count akan terupdate, nah ketika count ter update, useEffect akan dijalankan sehingga judul halaman berubah. Simplenya, useEffect ini buat subscribe suatu state stiap ada perubahan lah..

nah selain digunakan untuk subscribe setiap ada perubahan, useEffect ini punya parameter kedua, untuk nentuin data apa yang di subscribe

```javascript
const Example = data => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `data berubah`
  }, data) //dia cuma bakal liat perubahan di data}}
}
```

nah dengan contoh kode diatas, kita count bertambah useEffect ga bakal dijalankan, karena kita isi parameter ke 2 dengan variable data

parameter ke 2 sendiri bisa diisi dengan array kosong, gunanya buat bikin useEffect cuma dijalankan setiap mount dan unmount

```javascript
const Example = data => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `judul baru`
  }, []) //fungsi cuma bakal dijalankan saat mount dan unmount}
}
```

ok sekarang kita bikin contoh kapan saya menggunakan useEffect

```javascript
import React, { useState, useEffect } from "react"

const FComponent = () => {
  const [state, setState] = useState({ data: [], offset: 0, limit: 5 })
  const loadMore = () => {
    setState({ ...state, offset: state.offset + 5, limit: state.limit + 5 })
  }
  useEffect(() => {
    async function fetchData() {
      console.log("fetch")
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${state.offset}&limit=${state.limit}`
      )
      const data = await response.json()
      setState(s => ({ ...s, data: [...s.data, ...data.results] }))
    }
    fetchData()
  }, [state.offset, state.limit])
  return (
    <div style={{ padding: 10 }}>
      {state.data.map((data, i) => (
        <div key={i}>{data.name}</div>
      ))}
      <button onClick={loadMore}>LoadMore</button>
    </div>
  )
}

export default FComponent
```

ok sekarang kita bahas satu persatu potongan code diatas..

```javascript
useEffect(() => {
  async function fetchData() {
    console.log("fetch")
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?offset=${state.offset}&limit=${state.limit}`
    )
    const data = await response.json()
    setState(s => ({ ...s, data: [...s.data, ...data.results] }))
  }
  fetchData()
}, [state.offset, state.limit])
```

fetchData adalah potongan code untuk ambil data dari api, nah karena useEffect dijalankan saat mount, dan parameter ke 2 berubah, maka dapetlah kita data dari API saat mount. nah, karena gw taro state.offset, dan limit di parameter ke 2, maka useEffect ini juga akan dijalankan ketika ada perubahan di kedua insan(?) tersebut..

nah di code

```javascript
const loadMore = () => {
  setState({ ...state, offset: state.offset + 5, limit: state.limit + 5 })
}
```

gw ga manggil fetchData, tapi cuma ubah state offset sama limit maka fetchData akan dipanggil karena pengaruh useEffect seperti yang gw jelaskan diatas..

tarraaaa~ jadilah fungsi loadmore dengan useEffect..
kalo pengen coba langsung liat hasilnya bisa liat disini <https://wc8ef.csb.app/>

Terima Kasih sudah membaca
