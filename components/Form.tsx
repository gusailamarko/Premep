const Form = () => {
  return (
    <div className="form-container">
        <form action="" id="form" className="form text-center w-[80%] md:w-full mt-[2rem] p-[1rem] rounded">
            <div>
                <label htmlFor="nev">Név:</label>
                <input type="text" name="nev" id="nev" required/>
            </div>
            <div>
                <label htmlFor="telszam">Telefonszám:</label>
                <input type="tel" name="telszam" id="telszam" required/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" required/>
            </div>
            <div>
                <label htmlFor="telepules">Település:</label>
                <input type="text" name="telepules" id="telepules" required/>
            </div>
            <div>
                <label htmlFor="meret">Hány m<sup>2</sup> az ingatlan?</label>
                <input type="number" name="meret" id="meret" required/>
            </div>
            <div>
                <label htmlFor="falazat">Milyen a falazata?</label>
                <input type="text" name="falazat" id="falazat" required/>
            </div>
            <div>
                <label htmlFor="szigetelesVane">Van már rajta meglévő szigetelés?</label>
                <select name="szigetelesVane" id="szigetelesVane">
                    <option value="" selected disabled>--Válasszon--</option>
                    <option value="yes">Igen</option>
                    <option value="no">Nem</option>
                </select>
            </div>
            <div>
                <label htmlFor="szabadHely">Mekkora a legnagyobb helyiség, ahova a klímát be tudjuk szerelni?</label>
                <input type="text" name="szabadHely" id="szabadHely" required/>
            </div>
            <div>
                <label htmlFor="fodemSzigeteles">Födém szigetelve van?</label>
                <select name="fodemSzigeteles" id="fodemSzigeteles">
                    <option value="" selected disabled>--Válasszon--</option>
                    <option value="yes">Igen</option>
                    <option value="no">Nem</option>
                </select>
            </div>
            <button className="submitBtn font-bold uppercase" type="submit">👉 Jogosultság ellenőrzése</button>
            <div className="form-disclaimer">
                <p className="text-[0.8rem] text-gray-800 font-semibold italic">Az adatok megadásával hozzájárul a kapcsolatfelvételhez!</p>
                <p className="text-[0.8rem] text-gray-800 font-semibold italic">A jelentkezés nem jelent kötelezettséget!</p>
            </div>
        </form>
    </div>
  )
}

export default Form