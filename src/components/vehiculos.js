import { useState } from "react";

const Vehiculos = () => {

  
  const [vehiculo, setVehiculo] = useState([])
  
  


  return ( 
    <>
      <div style={{paddingTop: "82px"}}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Vehiculos ordenados por casa</strong>
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <table className="table small table-secondary">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">Casa</th>
                      <th scope="col">Placa</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Modelo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['fortuner.webp', 'Ford Limited', 'IYN-407'])}>
                      <th scope="row" rowSpan="2" className="text-center">1</th>
                      <td>IYN-407</td>
                      <td>FORD</td>
                      <td>LIMITED</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['escape.webp', 'Ford Escape', 'KAL-052'])}>
                      <td>KAL-052</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['captiva.jpg', 'Toyota Cross', 'JWX-406'])}>
                      <th scope="row" rowSpan="2" className="text-center">2</th>
                      <td>RLZ-267</td>
                      <td>CHEVROLET</td>
                      <td>CAPTIVA</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['mg-mg3.webp', 'MG MG3', 'HTK-540'])}>
                      <td>HTK-540</td>
                      <td>MG</td>
                      <td>MG3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center" >3</th>
                      <td>No aplica</td>
                      <td>No aplica</td>
                      <td>No aplica</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['escape4.jpg', 'Ford Escape', 'CYD-443'])}>
                      <th scope="row" rowSpan="3" className="text-center">4</th>
                      <td>CYD-443</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['sparkgt.jpg', 'Chevrolet Spark Gt', 'NCW-508'])}>
                      <td>NCW-508</td>
                      <td>CHEVROLET</td>
                      <td>SPARK GT</td>
                    </tr>
                    <tr  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['logan.jpg', 'Renault Logan', 'CVT-828'])}>
                      <td>CVT-828</td>
                      <td>RENAULT</td>
                      <td>LOGAN</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['mazdacx-9.webp', 'Mazda Cx-9', 'EJO-565'])}>
                      <th scope="row" rowSpan="4" className="text-center">5</th>
                      <td>EJO-565</td>
                      <td>MAZDA</td>
                      <td>CX-9</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['mazdacx-5.jpg', 'Mazda Cx-5', 'HSR-051'])}>
                      <td>HSR-051</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['audia4.jpg', 'Audi A4', 'RNT-628'])}>
                      <td>RNT-628</td>
                      <td>AUDI</td>
                      <td>A4</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['coopers.webp', 'Mini Cooper CooperS', 'FPV-762'])}>
                      <td>FPV-762</td>
                      <td>MINI-COOPER</td>
                      <td>COOPER-S</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['equinox.jpg', 'Chevrolet Equinox', 'EJV-347'])}>
                      <th scope="row" rowSpan="3" className="text-center">6</th>
                      <td>EJV-347</td>
                      <td>CHEVROLET</td>
                      <td>EQUINOX</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['zoe.jpg', 'Renault Zoe', 'FYS-087'])}>
                      <td>FYS-087</td>
                      <td>RENAULT</td>
                      <td>ZOE</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['volvo.jpeg', 'Volvo V40 T4', 'GMY-424'])}>
                      <td>GMY-424</td>
                      <td>VOLVO</td>
                      <td>V40 T4</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['vwgolf.jpg', 'VW Golf', 'BNT-052'])}>
                      <th scope="row" rowSpan="4" className="text-center">7</th>
                      <td>BNT-052</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['vwgolf2.jpg', 'VW Golf', 'UBX-410'])}>
                      <td>UBX-410</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['nissanmarch.webp', 'Nissan March', 'HSW-227'])}>
                      <td>HSW-227</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['vwjetta.webp', 'VW Jetta', 'CZN-529'])}>
                      <td>CZN-529</td>
                      <td>VW</td>
                      <td>JETTA</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['trail_blazer.jpg', 'Chevrolet TrailBlazer', 'BRM-384'])}>
                      <th scope="row" rowSpan="2" className="text-center">8</th>
                      <td>BRM-384</td>
                      <td>CHEVROLET</td>
                      <td>TRAILBLAZER</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['toyota_4runner.jpg', 'Toyota 4Runner', 'BMP-470'])}>
                      <td>BMP-470</td>
                      <td>TOYOTA</td>
                      <td>4RUNNER</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['mazda_allegro.jpg', 'Mazda Allegro HB', 'BTF-003'])}>
                      <th scope="row" rowSpan="3" className="text-center">9</th>
                      <td>BTF-003</td>
                      <td>MAZDA</td>
                      <td>ALLEGRO HB</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['hyundai_elantra.jpg', 'Hyundai Elantra', 'BHN-670'])}>
                      <td>BHN-670</td>
                      <td>HYUNDAI</td>
                      <td>ELANTRA</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['nissan_march.jpg', 'Nissan March', 'JDM-804'])}>
                      <td>JDM-804</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['mazda_cx5_cafe.webp', 'Mazda CX-5', 'DMZ-550'])}>
                      <th scope="row" rowSpan="4" className="text-center">10</th>
                      <td>DMZ-550</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['ford_escape_se.jpg', 'Ford Escape-SE', 'UBO-480'])}>
                      <td>UBO-480</td>
                      <td>FORD</td>
                      <td>ESCAPE SE</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['ford_escape_xlt.jpg', 'Ford Escape-XLT', 'RKV-027'])}>
                      <td>RKV-027</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['renault_duster.webp', 'Renault Duster', 'FNW-886'])}>
                      <td>FNW-886</td>
                      <td>RENAULT</td>
                      <td>DUSTER</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['nissan_x_trail.jpg', 'Nissan Xtrail', 'ZYW-130'])}>
                      <th scope="row" rowSpan="2" className="text-center">11</th>
                      <td>ZYW-130</td>
                      <td>NISSAN</td>
                      <td>X-TRAIL</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['ford_fiesta.webp', 'Ford Fiesta', 'MPX-625'])}>
                      <td>MPX-625</td>
                      <td>FORD</td>
                      <td>FIESTA</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['honda_crv.webp', 'Honda CR-V', 'RZO-857'])}>
                      <th scope="row" rowSpan="2" className="text-center">12</th>
                      <td>RZO-857</td>
                      <td>HONDA</td>
                      <td>CR-V</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['honda_integra.jpg', 'Honda Integra', 'BCB-174'])}>
                      <td>BCB-174</td>
                      <td>HONDA</td>
                      <td>INTEGRA</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['chevrolet_beat.webp', 'Chevrolet Beat Premier', 'FZX-673'])}>
                      <th scope="row" rowSpan="2" className="text-center">13</th>
                      <td>FZX-673</td>
                      <td>CHEVROLET</td>
                      <td>BEAT PREMIER</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['citroen_saxo.webp', 'Citroen Saxo', 'BJN-262'])}>
                      <td>BJN-262</td>
                      <td>CITROEN</td>
                      <td>SAXO</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['toyota_hilux.webp', 'Toyota Hilux', 'FYT-177'])}>
                      <th scope="row" rowSpan="5" className="text-center">14</th>
                      <td>FYT-177</td>
                      <td>TOYOTA</td>
                      <td>HILUX</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['for_escape14.jpg', 'Ford Escape', 'IWY-681'])}>
                      <td>IWY-681</td>
                      <td>FORD</td>
                      <td>ESCAPE</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['nissan_xtrail.jpg', 'Nissan X-Trail', 'EFN-488'])}>
                      <td>EFN-488</td>
                      <td>NISSAN</td>
                      <td>X-TRAIL</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['toyota_rav4.jpg', 'Toyota Rav4', 'ENU-596'])}>
                      <td>ENU-596</td>
                      <td>TOYOTA</td>
                      <td>RAV4</td>
                    </tr>
                    <tr data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setVehiculo(['tucson-hyundai.jpg', 'Hyundai Tucson', 'HMS-078'])}>
                      <td>HMS-078</td>
                      <td>HYUNDAI</td>
                      <td>TUCSON</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="4" className="text-center">15</th>
                      <td>DOZ-645</td>
                      <td>BMW</td>
                      <td>X3</td>
                    </tr>
                    <tr>
                      <td>CXQ-078</td>
                      <td>VW</td>
                      <td>JETTA</td>
                    </tr>
                    <tr>
                      <td>CXQ-345</td>
                      <td>MITSUBISHI</td>
                      <td>MONTERO</td>
                    </tr>
                    <tr>
                      <td>BTK-904</td>
                      <td>JEEP</td>
                      <td>CHEROKEE CRD</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">16</th>
                      <td>QFQ-707</td>
                      <td>TOYOTA</td>
                      <td>FORTUNER</td>
                    </tr>
                    <tr>
                      <td>BNW-802</td>
                      <td>RENAULT</td>
                      <td>SCENIC</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">17</th>
                      <td>UGW-964</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <td>FZU-179</td>
                      <td>MAZDA</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">18</th>
                      <td>GGO-317</td>
                      <td>TOYOTA</td>
                      <td>RAV4</td>
                    </tr>
                    <tr>
                      <td>CXZ-562</td>
                      <td>RENAULT</td>
                      <td>CLIO</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">19</th>
                      <td>ARD-981</td>
                      <td>BMW</td>
                      <td>323i</td>
                    </tr>
                    <tr>
                      <td>RGN-634</td>
                      <td>RENAULT</td>
                      <td>SCALA</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="3" className="text-center">20</th>
                      <td>BOP-530</td>
                      <td>HONDA</td>
                      <td>CIVIC</td>
                    </tr>
                    <tr>
                      <td>FZY-305</td>
                      <td>HONDA</td>
                      <td>CR-V</td>
                    </tr>
                    <tr>
                      <td>FPO-455</td>
                      <td>AUDI</td>
                      <td>S3</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="3" className="text-center">21</th>
                      <td>HIZ-816</td>
                      <td>BMW</td>
                      <td>X5</td>
                    </tr>
                    <tr>
                      <td>EMN-093</td>
                      <td>HYUNDAI</td>
                      <td>SANTA FE</td>
                    </tr>
                    <tr>
                      <td>IDV-790</td>
                      <td>RENAULT</td>
                      <td>SANDERO</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">22</th>
                      <td>URR-744</td>
                      <td>KIA</td>
                      <td>RIO SPICE</td>
                    </tr>
                    <tr>
                      <td>DDR-549</td>
                      <td>BMW</td>
                      <td>320i</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Vehiculos ordenados alfabeticamente</strong>
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <table className="table small table-striped table-info">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">Casa</th>
                      <th scope="col">Placa</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Modelo</th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-center">19</th>
                      <td>ARD-981</td>
                      <td>BMW</td>
                      <td>323i</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">12</th>
                      <td>BCB-174</td>
                      <td>HONDA</td>
                      <td>INTEGRA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">9</th>
                      <td>BHN-670</td>
                      <td>HYUNDAI</td>
                      <td>ELANTRA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">13</th>
                      <td>BJN-262</td>
                      <td>CITROEN</td>
                      <td>SAXO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">8</th>
                      <td>BMP-470</td>
                      <td>TOYOTA</td>
                      <td>4RUNNER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>BNT-052</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">16</th>
                      <td>BNW-802</td>
                      <td>RENAULT</td>
                      <td>SCENIC</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">20</th>
                      <td>BOP-530</td>
                      <td>HONDA</td>
                      <td>CIVIC</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">8</th>
                      <td>BRM-384</td>
                      <td>CHEVROLET</td>
                      <td>TRAILBLAZER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">9</th>
                      <td>BTF-003</td>
                      <td>MAZDA</td>
                      <td>ALLEGRO HB</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>BTK-904</td>
                      <td>JEEP</td>
                      <td>CHEROKEE CRD</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">4</th>
                      <td>CVT-828</td>
                      <td>RENAULT</td>
                      <td>LOGAN</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>CXQ-078</td>
                      <td>VW</td>
                      <td>JETTA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>CXQ-345</td>
                      <td>MITSUBISHI</td>
                      <td>MONTERO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">18</th>
                      <td>CXZ-562</td>
                      <td>RENAULT</td>
                      <td>CLIO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">4</th>
                      <td>CYD-443</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>CZN-529</td>
                      <td>VW</td>
                      <td>JETTA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">22</th>
                      <td>DDR-549</td>
                      <td>BMW</td>
                      <td>320i</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>DMZ-550</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>DOZ-645</td>
                      <td>BMW</td>
                      <td>X3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>EFN-488</td>
                      <td>NISSAN</td>
                      <td>X-TRAIL</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>EJO-565</td>
                      <td>MAZDA</td>
                      <td>CX-9</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">6</th>
                      <td>EJV-347</td>
                      <td>CHEVROLET</td>
                      <td>EQUINOX</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">21</th>
                      <td>EMN-093</td>
                      <td>HYUNDAI</td>
                      <td>SANTA FE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>ENU-596</td>
                      <td>TOYOTA</td>
                      <td>RAV4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>FNW-886</td>
                      <td>RENAULT</td>
                      <td>DUSTER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">20</th>
                      <td>FPO-455</td>
                      <td>AUDI</td>
                      <td>S3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>FPV-762</td>
                      <td>MINI-COOPER</td>
                      <td>COOPER-S</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">6</th>
                      <td>FYS-087</td>
                      <td>RENAULT</td>
                      <td>ZOE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>FYT-177</td>
                      <td>TOYOTA</td>
                      <td>HILUX</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">17</th>
                      <td>FZU-179</td>
                      <td>MAZDA</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">13</th>
                      <td>FZX-673</td>
                      <td>CHEVROLET</td>
                      <td>BEAT PREMIER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">20</th>
                      <td>FZY-305</td>
                      <td>HONDA</td>
                      <td>CR-V</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">18</th>
                      <td>GGO-317</td>
                      <td>TOYOTA</td>
                      <td>RAV4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">6</th>
                      <td>GMY-424</td>
                      <td>VOLVO</td>
                      <td>V40 T4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">21</th>
                      <td>HIZ-816</td>
                      <td>BMW</td>
                      <td>X5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>HMS-078</td>
                      <td>HYUNDAI</td>
                      <td>TUCSON</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>HSR-051</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>HSW-227</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">2</th>
                      <td>HTK-540</td>
                      <td>MG</td>
                      <td>MG3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">21</th>
                      <td>IDV-790</td>
                      <td>RENAULT</td>
                      <td>SANDERO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">1</th>
                      <td>IYN-407</td>
                      <td>FORD</td>
                      <td>LIMITED</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>IWY-681</td>
                      <td>FORD</td>
                      <td>ESCAPE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">9</th>
                      <td>JDM-804</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">1</th>
                      <td>KAL-052</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">11</th>
                      <td>MPX-625</td>
                      <td>FORD</td>
                      <td>FIESTA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">4</th>
                      <td>NCW-508</td>
                      <td>CHEVROLET</td>
                      <td>SPARK GT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">16</th>
                      <td>QFQ-707</td>
                      <td>TOYOTA</td>
                      <td>FORTUNER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">19</th>
                      <td>RGN-634</td>
                      <td>RENAULT</td>
                      <td>SCALA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>RKV-027</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">2</th>
                      <td>RLZ-267</td>
                      <td>CHEVROLET</td>
                      <td>CAPTIVA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>RNT-628</td>
                      <td>AUDI</td>
                      <td>A4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">12</th>
                      <td>RZO-857</td>
                      <td>HONDA</td>
                      <td>CR-V</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>UBO-480</td>
                      <td>FORD</td>
                      <td>ESCAPE SE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>UBX-410</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">17</th>
                      <td>UGW-964</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">22</th>
                      <td>URR-744</td>
                      <td>KIA</td>
                      <td>RIO SPICE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">11</th>
                      <td>ZYW-130</td>
                      <td>NISSAN</td>
                      <td>X-TRAIL</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">3</th>
                      <td>No aplica</td>
                      <td>No aplica</td>
                      <td>No aplica</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Vehiculos ordenados numericamente</strong>
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <table className="table small table-striped table-danger">
                  <thead>
                    <tr>
                      <th scope="col" className="text-center">Casa</th>
                      <th scope="col">Placa</th>
                      <th scope="col">Marca</th>
                      <th scope="col">Modelo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="text-center">9</th>
                      <td>003-BTF</td>
                      <td>MAZDA</td>
                      <td>ALLEGRO HB</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>027-RKV</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>051-HSR</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>052-BNT</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">1</th>
                      <td>052-KAL</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>078-HMS</td>
                      <td>HYUNDAI</td>
                      <td>TUCSON</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>078-CXQ</td>
                      <td>VW</td>
                      <td>JETTA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">6</th>
                      <td>087-FYS</td>
                      <td>RENAULT</td>
                      <td>ZOE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">21</th>
                      <td>093-EMN</td>
                      <td>HYUNDAI</td>
                      <td>SANTA FE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">11</th>
                      <td>130-ZYW</td>
                      <td>NISSAN</td>
                      <td>X-TRAIL</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">12</th>
                      <td>174-BCB</td>
                      <td>HONDA</td>
                      <td>INTEGRA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>177-FYT</td>
                      <td>TOYOTA</td>
                      <td>HILUX</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">17</th>
                      <td>179-FZU</td>
                      <td>MAZDA</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>227-HSW</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">13</th>
                      <td>262-BJN</td>
                      <td>CITROEN</td>
                      <td>SAXO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">2</th>
                      <td>267-RLZ</td>
                      <td>CHEVROLET</td>
                      <td>CAPTIVA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">20</th>
                      <td>305-FZY</td>
                      <td>HONDA</td>
                      <td>CR-V</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">18</th>
                      <td>317-GGO</td>
                      <td>TOYOTA</td>
                      <td>RAV4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>345-CXQ</td>
                      <td>MITSUBISHI</td>
                      <td>MONTERO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">6</th>
                      <td>347-EJV</td>
                      <td>CHEVROLET</td>
                      <td>EQUINOX</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">8</th>
                      <td>384-BRM</td>
                      <td>CHEVROLET</td>
                      <td>TRAILBLAZER</td>
                    </tr>
                    {/* <tr>
                      <th scope="row" className="text-center">2</th>
                      <td>406-JWX</td>
                      <td>TOYOTA</td>
                      <td>CROSS</td>
                    </tr> */}
                    <tr>
                      <th scope="row" className="text-center">1</th>
                      <td>407-IYN</td>
                      <td>FORD</td>
                      <td>LIMITED</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>410-UBX</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">6</th>
                      <td>424-GMY</td>
                      <td>VOLVO</td>
                      <td>V40 T4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">4</th>
                      <td>443-CYD</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">20</th>
                      <td>455-FPO</td>
                      <td>AUDI</td>
                      <td>S3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">8</th>
                      <td>470-BMP</td>
                      <td>TOYOTA</td>
                      <td>4RUNNER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>480-UBO</td>
                      <td>FORD</td>
                      <td>ESCAPE SE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>488-EFN</td>
                      <td>NISSAN</td>
                      <td>X-TRAIL</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">4</th>
                      <td>508-NCW</td>
                      <td>CHEVROLET</td>
                      <td>SPARK GT</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">7</th>
                      <td>529-CZN</td>
                      <td>VW</td>
                      <td>JETTA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">20</th>
                      <td>530-BOP</td>
                      <td>HONDA</td>
                      <td>CIVIC</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">2</th>
                      <td>540-HTK</td>
                      <td>MG</td>
                      <td>MG3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">22</th>
                      <td>549-DDR</td>
                      <td>BMW</td>
                      <td>320i</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>550-DMZ</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">18</th>
                      <td>562-CXZ</td>
                      <td>RENAULT</td>
                      <td>CLIO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>565-EJO</td>
                      <td>MAZDA</td>
                      <td>CX-9</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>596-ENU</td>
                      <td>TOYOTA</td>
                      <td>RAV4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">11</th>
                      <td>625-MPX</td>
                      <td>FORD</td>
                      <td>FIESTA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>628-RNT</td>
                      <td>AUDI</td>
                      <td>A4</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">19</th>
                      <td>634-RGN</td>
                      <td>RENAULT</td>
                      <td>SCALA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>645-DOZ</td>
                      <td>BMW</td>
                      <td>X3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">9</th>
                      <td>670-BHN</td>
                      <td>HYUNDAI</td>
                      <td>ELANTRA</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">13</th>
                      <td>673-FZX</td>
                      <td>CHEVROLET</td>
                      <td>BEAT PREMIER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">14</th>
                      <td>681-IWY</td>
                      <td>FORD</td>
                      <td>ESCAPE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">16</th>
                      <td>707-QFQ</td>
                      <td>TOYOTA</td>
                      <td>FORTUNER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">22</th>
                      <td>744-URR</td>
                      <td>KIA</td>
                      <td>RIO SPICE</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">5</th>
                      <td>762-FPV</td>
                      <td>MINI-COOPER</td>
                      <td>COOPER-S</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">21</th>
                      <td>790-IDV</td>
                      <td>RENAULT</td>
                      <td>SANDERO</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">16</th>
                      <td>802-BNW</td>
                      <td>RENAULT</td>
                      <td>SCENIC</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">9</th>
                      <td>804-JDM</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">21</th>
                      <td>816-HIZ</td>
                      <td>BMW</td>
                      <td>X5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">4</th>
                      <td>828-CVT</td>
                      <td>RENAULT</td>
                      <td>LOGAN</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">12</th>
                      <td>857-RZO</td>
                      <td>HONDA</td>
                      <td>CR-V</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">10</th>
                      <td>886-FNW</td>
                      <td>RENAULT</td>
                      <td>DUSTER</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">15</th>
                      <td>904-BTK</td>
                      <td>JEEP</td>
                      <td>CHEROKEE CRD</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">17</th>
                      <td>964-UGW</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">19</th>
                      <td>981-ARD</td>
                      <td>BMW</td>
                      <td>323i</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">3</th>
                      <td>No aplica</td>
                      <td>No aplica</td>
                      <td>No aplica</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{vehiculo[1]}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-center">
                <img src={vehiculo[0]} width="300" alt={vehiculo[1]}/>
              </div>
              <div className="modal-body text-center">
                <h1><strong>{vehiculo[2]}</strong></h1>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
          </div>
        </div>
      </div>
    </>
   )
}
 
export default Vehiculos;