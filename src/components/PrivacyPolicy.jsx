import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const CONTACT_EMAIL = 'Domenico.censori1@pec.it';

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                {language === 'en' && (
                    <p className="mb-6 text-sm font-body bg-orange-50 border border-orange-200 text-secondary px-4 py-3 rounded-xl">
                        This privacy policy is available in Italian only, as it is a legal document governed by Italian law.
                        If you need help understanding it, please contact us.
                    </p>
                )}
                <h1 className="text-3xl md:text-4xl font-heading font-black text-secondary uppercase mb-2">
                    Informativa sulla Privacy
                </h1>
                <p className="text-text-muted font-body text-sm mb-10">
                    Ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (&quot;GDPR&quot;) — Ultimo aggiornamento: 28/07/2026
                </p>

                <div className="prose-privacy space-y-8 font-body text-text">

                    <div>
                        <h2 className="text-xl font-heading font-bold text-secondary mb-2">1. Titolare del trattamento</h2>
                        <p>
                            Il Titolare del trattamento dei dati è <strong>Domenico Censori</strong>, titolare dell'attività
                            individuale &quot;Medoc Pub&quot;, con sede in Via Monfalcone, 10 — 63074 San Benedetto del Tronto (AP), Italia,
                            P.IVA 02574390445.
                        </p>
                        <p className="mt-2">
                            Contatti: telefono <a href="tel:+393780919110" className="text-primary underline">+39 378 091 9110</a>,
                            email <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a>.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading font-bold text-secondary mb-2">2. Dati trattati e finalità</h2>
                        <p className="mb-3">
                            Questo sito è un sito vetrina/menù digitale. Non richiede registrazione, non utilizza sistemi di login
                            e non raccoglie né conserva dati su un proprio server, salvo quanto descritto di seguito.
                        </p>

                        <h3 className="font-heading font-bold text-secondary mt-4 mb-1">a) Dati di navigazione e statistiche (Vercel Analytics e Speed Insights)</h3>
                        <p>
                            Il sito utilizza i servizi <strong>Vercel Web Analytics</strong> e <strong>Vercel Speed Insights</strong>,
                            entrambi forniti da Vercel Inc., per raccogliere statistiche aggregate e anonime sulle visite (pagine
                            visualizzate, provenienza geografica approssimativa, tipo di dispositivo/browser) e sulle prestazioni
                            tecniche di caricamento del sito. Entrambi i servizi sono progettati per non utilizzare cookie né
                            identificatori persistenti e non tracciano gli utenti tra siti diversi. L'indirizzo IP viene elaborato
                            in modo transitorio al solo fine di derivare informazioni geografiche aggregate e non viene conservato
                            in forma identificativa da Vercel oltre quanto necessario a tale scopo.
                            <br />Base giuridica: legittimo interesse del Titolare a comprendere l'utilizzo e le prestazioni del sito (art. 6, par. 1, lett. f, GDPR).
                            <br />Per maggiori informazioni: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy di Vercel</a>.
                        </p>

                        <h3 className="font-heading font-bold text-secondary mt-4 mb-1">b) Google Fonts</h3>
                        <p>
                            Per la visualizzazione dei caratteri tipografici, il sito carica i font &quot;Outfit&quot; e &quot;Nunito&quot;
                            direttamente dai server di Google (Google Fonts). Al caricamento della pagina, il browser dell'utente
                            effettua una richiesta diretta a Google LLC (con sede negli Stati Uniti), che comporta la trasmissione
                            dell'indirizzo IP a tale destinatario, secondo le modalità tecniche standard di questo tipo di servizio.
                            <br />Base giuridica: legittimo interesse del Titolare a garantire la corretta visualizzazione grafica del sito
                            (art. 6, par. 1, lett. f, GDPR).
                            <br />Per maggiori informazioni: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy di Google</a>.
                        </p>

                        <h3 className="font-heading font-bold text-secondary mt-4 mb-1">c) Richiesta di prenotazione tramite WhatsApp</h3>
                        <p>
                            Il modulo di prenotazione presente sul sito non invia alcun dato a un server del Titolare: i dati inseriti
                            dall'utente (nome, data, orario, numero di persone) vengono utilizzati esclusivamente per precompilare un
                            messaggio che l'utente stesso sceglie volontariamente di inviare tramite WhatsApp al numero del locale.
                            La gestione di tale messaggio e dei dati in esso contenuti è soggetta alle condizioni e all'informativa
                            privacy di WhatsApp (WhatsApp Ireland Limited, gruppo Meta).
                            <br />Base giuridica: esecuzione di misure precontrattuali richieste dall'interessato (art. 6, par. 1, lett. b, GDPR).
                            <br />Per maggiori informazioni: <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy di WhatsApp</a>.
                        </p>

                        <h3 className="font-heading font-bold text-secondary mt-4 mb-1">d) Preferenza di lingua (localStorage)</h3>
                        <p>
                            Il sito memorizza localmente, sul dispositivo dell'utente (tramite la tecnologia &quot;localStorage&quot; del
                            browser), la lingua scelta per la visualizzazione dei contenuti (italiano/inglese). Questo dato rimane
                            esclusivamente sul dispositivo dell'utente, non viene trasmesso al Titolare né a terzi, e viene utilizzato
                            al solo scopo tecnico di ricordare la preferenza per le visite successive.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading font-bold text-secondary mb-2">3. Cookie</h2>
                        <p>
                            Questo sito <strong>non utilizza cookie di profilazione, marketing o analytics basati su cookie</strong>.
                            Non è pertanto presente un banner di richiesta consenso cookie, in quanto le uniche tecnologie di
                            memorizzazione impiegate (localStorage per la lingua, descritta al punto 2.d) rientrano tra le tecnologie
                            tecniche esenti da consenso ai sensi dell'art. 122 del Codice Privacy e delle Linee Guida Cookie del
                            Garante per la Protezione dei Dati Personali.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading font-bold text-secondary mb-2">4. Destinatari e trasferimento dati extra-UE</h2>
                        <p>
                            I dati descritti al punto 2 possono essere trattati da fornitori terzi che agiscono in qualità di
                            titolari autonomi o responsabili del trattamento: Vercel Inc., Google LLC e WhatsApp Ireland Limited
                            (gruppo Meta). Tali fornitori hanno sede, in tutto o in parte, negli Stati Uniti d'America; il trasferimento
                            dei dati verso paesi extra-UE avviene sulla base delle garanzie previste dai rispettivi fornitori
                            (es. clausole contrattuali standard approvate dalla Commissione Europea), come indicato nelle relative
                            informative privacy sopra collegate.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading font-bold text-secondary mb-2">5. Periodo di conservazione</h2>
                        <p>
                            Il Titolare non conserva direttamente alcun dato personale su propri server. I dati statistici aggregati
                            trattati da Vercel Analytics sono conservati secondo le tempistiche indicate nella privacy policy di
                            Vercel. I messaggi inviati tramite WhatsApp sono conservati secondo le tempistiche e modalità previste
                            da WhatsApp/Meta.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading font-bold text-secondary mb-2">6. Diritti dell'interessato</h2>
                        <p>
                            In qualità di interessato, hai diritto di richiedere in ogni momento al Titolare, nei limiti e alle
                            condizioni previste dagli artt. 15-22 GDPR: accesso ai dati, rettifica, cancellazione, limitazione del
                            trattamento, portabilità dei dati e opposizione al trattamento. Puoi esercitare tali diritti scrivendo a{' '}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline">{CONTACT_EMAIL}</a>.
                        </p>
                        <p className="mt-2">
                            Hai inoltre diritto di proporre reclamo all'Autorità di controllo competente, il Garante per la Protezione
                            dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-primary underline">www.garanteprivacy.it</a>).
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-heading font-bold text-secondary mb-2">7. Modifiche alla presente informativa</h2>
                        <p>
                            Il Titolare si riserva il diritto di modificare o aggiornare la presente informativa in qualsiasi
                            momento, anche a seguito di modifiche normative o dei servizi utilizzati dal sito. Eventuali modifiche
                            saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
