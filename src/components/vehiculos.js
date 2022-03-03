const Vehiculos = () => {
  return ( 
    <>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Vehiculos ordenados por casa
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <table className="table small">
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
                      <th scope="row" rowSpan="2" className="text-center">1</th>
                      <td>IYN-407</td>
                      <td>FORD</td>
                      <td>LIMITED</td>
                    </tr>
                    <tr>
                      <td>KAL-052</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="3" className="text-center">2</th>
                      <td>JWX-406</td>
                      <td>TOYOTA</td>
                      <td>CROSS</td>
                    </tr>
                    <tr>
                      <td>RLZ-267</td>
                      <td>CHEVROLET</td>
                      <td>CAPTIVA</td>
                    </tr>
                    <tr>
                      <td>HTK-540</td>
                      <td>MG</td>
                      <td>MG3</td>
                    </tr>
                    <tr>
                      <th scope="row" className="text-center">3</th>
                      <td>No aplica</td>
                      <td>No aplica</td>
                      <td>No aplica</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="3" className="text-center">4</th>
                      <td>CYD-443</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <td>NCW-508</td>
                      <td>CHEVROLET</td>
                      <td>SPARK GT</td>
                    </tr>
                    <tr>
                      <td>CVT-828</td>
                      <td>RENAULT</td>
                      <td>LOGAN</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="4" className="text-center">5</th>
                      <td>EJO-565</td>
                      <td>MAZDA</td>
                      <td>CX-9</td>
                    </tr>
                    <tr>
                      <td>HSR-051</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <td>RNT-628</td>
                      <td>AUDI</td>
                      <td>A4</td>
                    </tr>
                    <tr>
                      <td>FPV-762</td>
                      <td>MINI-COOPER</td>
                      <td>COOPER-S</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="3" className="text-center">6</th>
                      <td>EJV-347</td>
                      <td>CHEVROLET</td>
                      <td>EQUINOX</td>
                    </tr>
                    <tr>
                      <td>FYS-087</td>
                      <td>RENAULT</td>
                      <td>ZOE</td>
                    </tr>
                    <tr>
                      <td>GMY-424</td>
                      <td>VOLVO</td>
                      <td>V40 T4</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="4" className="text-center">7</th>
                      <td>BNT-052</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr>
                      <td>UBX-410</td>
                      <td>VW</td>
                      <td>GOLF</td>
                    </tr>
                    <tr>
                      <td>HSW-227</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr>
                      <td>CZN-529</td>
                      <td>VW</td>
                      <td>JETTA</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">8</th>
                      <td>BRM-384</td>
                      <td>CHEVROLET</td>
                      <td>TRAILBLAZER</td>
                    </tr>
                    <tr>
                      <td>BMP-470</td>
                      <td>TOYOTA</td>
                      <td>4RUNNER</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="3" className="text-center">9</th>
                      <td>BTF-003</td>
                      <td>MAZDA</td>
                      <td>ALLEGRO HB</td>
                    </tr>
                    <tr>
                      <td>BHN-670</td>
                      <td>HYUNDAI</td>
                      <td>ELANTRA</td>
                    </tr>
                    <tr>
                      <td>JDM-804</td>
                      <td>NISSAN</td>
                      <td>MARCH</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="4" className="text-center">10</th>
                      <td>DMZ-550</td>
                      <td>MAZDA</td>
                      <td>CX-5</td>
                    </tr>
                    <tr>
                      <td>UBO-480</td>
                      <td>FORD</td>
                      <td>ESCAPE SE</td>
                    </tr>
                    <tr>
                      <td>RKV-027</td>
                      <td>FORD</td>
                      <td>ESCAPE XLT</td>
                    </tr>
                    <tr>
                      <td>FNW-886</td>
                      <td>RENAULT</td>
                      <td>DUSTER</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">11</th>
                      <td>ZYW-130</td>
                      <td>NISSAN</td>
                      <td>X-TRAIL</td>
                    </tr>
                    <tr>
                      <td>MPX-625</td>
                      <td>FORD</td>
                      <td>FIESTA</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">12</th>
                      <td>RZO-857</td>
                      <td>HONDA</td>
                      <td>CR-V</td>
                    </tr>
                    <tr>
                      <td>BCB-174</td>
                      <td>HONDA</td>
                      <td>INTEGRA</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="2" className="text-center">13</th>
                      <td>FZX-673</td>
                      <td>CHEVROLET</td>
                      <td>BEAT PREMIER</td>
                    </tr>
                    <tr>
                      <td>BJN-262</td>
                      <td>CITROEN</td>
                      <td>SAXO</td>
                    </tr>
                    <tr>
                      <th scope="row" rowSpan="4" className="text-center">14</th>
                      <td>FYT-177</td>
                      <td>TOYOTA</td>
                      <td>HILUX</td>
                    </tr>
                    <tr>
                      <td>IWY-681</td>
                      <td>FORD</td>
                      <td>ESCAPE</td>
                    </tr>
                    <tr>
                      <td>ENU-596</td>
                      <td>TOYOTA</td>
                      <td>RAV4</td>
                    </tr>
                    <tr>
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
                      <td>DDD-520</td>
                      <td>BMW</td>
                      <td>ESCAPE</td>
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
                      <td>AUDI</td>
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
                Vehiculos ordenados alfabeticamente
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <table className="table small">
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
                      <th scope="row" className="text-center">19</th>
                      <td>DDD-520</td>
                      <td>BMW</td>
                      <td>ESCAPE</td>
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
                      <td>AUDI</td>
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
                      <th scope="row" className="text-center">2</th>
                      <td>JWX-406</td>
                      <td>TOYOTA</td>
                      <td>CROSS</td>
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
                Vehiculos ordenados numericamente
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                En proceso :)
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   )
}
 
export default Vehiculos;