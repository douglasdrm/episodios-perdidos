import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div><strong>Episódios Perdidos</strong><p>Histórias que a TV nunca contou.</p></div>
      <p className="legal">Obra de fã não oficial e não comercial, sem vínculo, patrocínio ou endosso dos criadores, produtores ou detentores dos direitos das séries mencionadas. Personagens e marcas pertencem aos respectivos titulares.</p>
      <Link href="/sobre">Sobre o projeto</Link>
    </footer>
  );
}
