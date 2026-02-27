import { useRef, useState } from "react";
import emailjs from '@emailjs/browser'
import Alert from "./Alert";

const Form = () => {
    const [alert, setAlert] = useState<AlertState>({ open: false, type: 'success', message: '' })

    const form = useRef<HTMLFormElement>(null);
    const showAlert = (type: AlertState['type'], message: string) => setAlert({ open: true, type, message })

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) {
            showAlert('empty', "Kérem minden mezőt töltsön ki!")
            return;
        }

        const fd = new FormData(form.current)
        const nev = (fd.get('nev') as any) || ''
        const telszam = (fd.get('telszam')) as any || ''
        const email = (fd.get('email') as any) || ''
        const telepules = (fd.get('telepules') as any) || ''
        const meret = (fd.get('meret') as any) || ''
        const falazat = (fd.get('falazat') as any) || ''
        const szigetelesY_N = (fd.get('szigetelesVane') as any) || ''
        const szabadHely = (fd.get('szabadHely') as any) || ''
        const fodem = (fd.get('fodemSzigeteles') as any) || ''

        if(!nev.trim() || !telszam.trim() || !email.trim() || !telepules.trim() || !meret.trim() || !falazat.trim() || !szigetelesY_N.trim() || !szabadHely.trim() || !fodem.trim()) {
            showAlert('empty', 'Kérem minden mezőt töltsön ki!')
            return;
        }

        if(!email.includes('@')) {showAlert('failure', "Kérem érvényes email címet adjon meg!"); return;};

        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
            .then(() => {
                form.current?.reset();
                showAlert('success', 'Jelentkezés elküldve - hamarosan kapcsolatba lépünk Önnel!')
                }, (error) => {
                console.error(error);
                showAlert('failure', 'Sikertelen elküldés - kérem próbálkozzon később!')
            }
        )
    }

  return (
    <>
        <div className="form-container">
            <form ref={form} id="form" className="form text-center w-[80%] md:w-full mt-[2rem] p-[1rem] rounded">
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
                        <option value="Igen">Igen</option>
                        <option value="Nem">Nem</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="szabadHely">Mekkora a legnagyobb helyiség, ahova a klímát be tudjuk szerelni?</label>
                    <input type="text" name="szabadHely" id="szabadHely" required placeholder="Ez négyzetméterként lesz kezelve"/>
                </div>
                <div>
                    <label htmlFor="fodemSzigeteles">Födém szigetelve van?</label>
                    <select name="fodemSzigeteles" id="fodemSzigeteles">
                        <option value="" selected disabled>--Válasszon--</option>
                        <option value="Igen">Igen</option>
                        <option value="Nem">Nem</option>
                    </select>
                </div>
                <button className="submitBtn font-bold uppercase" type="submit" onClick={sendEmail}>👉 Jogosultság ellenőrzése</button>
                <div className="form-disclaimer">
                    <p className="text-[0.8rem] text-gray-800 font-semibold italic">Az adatok megadásával hozzájárul a kapcsolatfelvételhez!</p>
                    <p className="text-[0.8rem] text-gray-800 font-semibold italic">A jelentkezés nem jelent kötelezettséget!</p>
                </div>
            </form>
        </div>

        <Alert open={alert.open} type={alert.type} message={alert.message} onClose={() => setAlert(s => ({ ...s, open: false }))} />
    </>
  )
}

export default Form
