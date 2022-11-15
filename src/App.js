// import React, { Component } from 'react'

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nama: "RPL",
//       jumlah: 0
//     }
//   }

//   ubah_state = () => {
//     this.setState({ nama: 'Rekayasa Perangkat Lunak' })
//   }

//   tambah = () => {
//     this.setState({ jumlah: this.state.jumlah + 1 })
//   }

//   kurang = () => {
//     if (this.state.jumlah > 0) {
//       this.setState({ jumlah: this.state.jumlah - 1 })
//     }
//   }

//   render() {
//     return (
//       <>
//         {/* <h1>{this.state.nama}</h1>
//         <button onClick={() => this.ubah_state()}>Ubah</button> */}

//         <h1>{this.state.jumlah}</h1>
//         <button onClick={() => this.kurang()}>Kurang</button>
//         <button onClick={() => this.tambah()}>Tambah</button>
//       </>
//     );
//   }
// }

// export default App;





import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Gambar from './images/Perang-Rusia-Jepang.jpg'
import './App.css'

function Kartu(props) {
  return (
    <>
      <div className="card m-5 shadow">
        <img src={Gambar} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.namagbr}</h5>
          <p className='text-dark'>${props.harga}</p>
          <hr />
        </div>
        <br />
      </div>
    </>
  );
}

function Total(props) {
  return (
    <>
      <div className="card m-5 shadow">
        <div className='row p-2'>
          <div className='col'>
            <button className='btn btn-success' onClick={props.kurang}>-</button>
          </div>
          <div className='col me-2'>
            <input type='text' className='form-control' value={props.jumlah} />
          </div>
          <div className='col'>
            <button className='btn btn-success' onClick={props.tambah}>+</button>
          </div>
          <div className='pt-3 text-center'>
            <p>Total : $ {props.total}</p>
          </div>
        </div>
      </div>
    </>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namagbr: "Russo-Japanese war paintings",
      harga: 110.07,
      jumlah: 0,
      total: 0
    }
  }

  tambah = () => {
    this.setState({ jumlah: this.state.jumlah + 1 })
    this.setState({ total: (this.state.jumlah + 1) * this.state.harga })
  }

  kurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({ jumlah: this.state.jumlah - 1 })
      this.setState({ total: (this.state.jumlah - 1) * this.state.harga })
    }
  }

  render() {
    return (
      <>
        <Kartu namagbr={this.state.namagbr} harga={this.state.harga} />
        <Total jumlah={this.state.jumlah} total={this.state.total} kurang={this.kurang} tambah={this.tambah} />
      </>
    );
  }
}

export default App;