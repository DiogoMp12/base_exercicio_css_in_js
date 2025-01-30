import { useState } from 'react';
import Vaga from '../../components/Vaga';
import Vaga from '../Vaga';
import { ListaContainer, VagasList } from './ListaVagas.styles';

type VagaProps = {
  id: number;
  titulo: string;
  localizacao: string;
  nivel: string;
  link: string;
};

const vagasMock: VagaProps[] = [
  { id: 1, titulo: 'Desenvolvedor Front-End', localizacao: 'Remoto', nivel: 'Júnior', link: '#' },
  { id: 2, titulo: 'Designer de Interfaces', localizacao: 'São Paulo', nivel: 'Pleno', link: '#' },
  { id: 3, titulo: 'Desenvolvedor Fullstack', localizacao: 'Rio de Janeiro', nivel: 'Sênior', link: '#' },
];

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('');

  const vagasFiltradas = vagasMock.filter((vaga) =>
    vaga.titulo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <ListaContainer>
      <FormVagas aoPesquisar={(termo) => setFiltro(termo)} />
      <VagasList>
        {vagasFiltradas.map((vaga) => (
          <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            link={vaga.link}
          />
        ))}
      </VagasList>
    </ListaContainer>
  );
};

export default ListaVagas;
