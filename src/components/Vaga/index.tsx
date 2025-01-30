import { VagaContainer, VagaTitulo, VagaLink } from './Vaga.styles';

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  link: string;
};

const Vaga = ({ titulo, localizacao, nivel, link }: Props) => {
  return (
    <VagaContainer>
      <VagaTitulo>{titulo}</VagaTitulo>
      <p>📍 {localizacao}</p>
      <p>💼 {nivel}</p>
      <VagaLink href={link} target="_blank" rel="noopener noreferrer">
        Ver detalhes
      </VagaLink>
    export default Vaga;
