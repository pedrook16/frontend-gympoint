import React from 'react';
import { MdSearch, MdEdit, MdDelete, MdAdd } from 'react-icons/md';

export default function Stutents() {
  return (
    <>
      <div>
        <h1>Gerenciar Alunos</h1>
        <div>
          <button type="button">
            <MdAdd size={25} color="#fff" />
            CADASTRAR
          </button>
          <div>
            <MdSearch size={20} color="#999" />
            <input type="text" placeholder="Buscar aluno" />
          </div>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pedro</td>
            <td>pedro@gmail.com</td>
            <td>23</td>
            <td>
              <MdEdit size={20} color="#4d85ee" />
              <MdDelete size={20} color="#de3b3b" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
