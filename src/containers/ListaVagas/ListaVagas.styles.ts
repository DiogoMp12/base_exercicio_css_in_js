import styled from 'styled-components';

export const ListaContainer = styled.div`
  padding: 20px;
  background-color: var(--cor-secundaria);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const VagasList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 20px;
  padding: 0;
  list-style: none;
`;
