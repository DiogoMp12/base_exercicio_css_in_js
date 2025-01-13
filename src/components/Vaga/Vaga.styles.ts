import styled from 'styled-components';

export const VagaContainer = styled.li`
  border: 1px solid var(--cor-principal);
  background-color: var(--cor-secundaria);
  padding: 16px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--cor-principal);
    color: var(--cor-secundaria);
  }
`;

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const VagaLink = styled.a`
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  background-color: var(--cor-principal);
  color: var(--cor-secundaria);
  border-radius: 8px;
  font-weight: bold;

  &:hover {
    background-color: var(--cor-secundaria);
    color: var(--cor-principal);
  }
`;
