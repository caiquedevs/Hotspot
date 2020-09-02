import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Table, TableHead, TableBody } from './styled';
import * as actionsHotSpots from '../../store/modules/createHotspot/actions';

export default function TableComponent() {
  const allHotSpots = useSelector((state) => state.createHotspot.hotspots);
  const dispatch = useDispatch();

  // Deletar Hotspot enviando o index do array para o redux;
  const handleClickDeleteHotspot = (index) => {
    dispatch(actionsHotSpots.deleteHotspot(index));
    toast.info('Hotspot excluido com sucesso');
  };

  return (
    <Table>
      <TableHead>
        <tr>
          <th>List of hotspots</th>
        </tr>
      </TableHead>

      <TableBody>
        {allHotSpots &&
          allHotSpots.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleClickDeleteHotspot(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
      </TableBody>
    </Table>
  );
}
