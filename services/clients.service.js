import { clients } from '../mock-data/clients.data.js';
import { v4 as uuidv4 } from 'uuid';

class ClientsService {
  getClientsHandler() {
    return clients;
  }

  getClientHandlerByParam(id) {
    const client = clients.find(c => c.id === id);
    if (!client) throw new Error('Cliente no encontrado');
    return client;
  }

  postClientHandler(clientData) {
    if (!clientData.nombre || clientData.nombre === '') {
      throw new Error('Se requiere el nombre del cliente');
    }
    const newClient = { id: uuidv4(), ...clientData };
    clients.push(newClient);
    return newClient;
  }

  putClientHandler(id, clientData) {
    const index = clients.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Cliente no encontrado');
    clients[index] = { ...clients[index], ...clientData };
    return clients[index];
  }

  deleteClientHandler(id) {
    const index = clients.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Cliente no encontrado');
    clients.splice(index, 1);
    return true;
  }
}

export default new ClientsService();