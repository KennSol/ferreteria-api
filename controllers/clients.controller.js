import ClientsService from '../services/clients.service.js';

const getClientsHandler = async (req, res) => {
  try {
    const clients = ClientsService.getClientsHandler();
    let response = {
      message: 'success',
      data: {
        clients,
        count: clients.length
      }
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
};

const getClientHandlerByParam = async (req, res) => {
  try {
    const id = req.params.id;
    const client = ClientsService.getClientHandlerByParam(id);
    let response = {
      message: 'success',
      data: client
    };
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

const postClientHandler = async (req, res) => {
  try {
    const newClient = req.body;
    const client = ClientsService.postClientHandler(newClient);
    let response = {
      message: 'success',
      data: {
        clientId: client.id
      }
    };
    return res.status(201).json(response);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message
    });
  }
};

const putClientHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const clientData = req.body;
    const client = ClientsService.putClientHandler(id, clientData);
    let response = {
      message: 'success',
      data: client
    };
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

const deleteClientHandler = async (req, res) => {
  try {
    const id = req.params.id;
    ClientsService.deleteClientHandler(id);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

export {
  getClientsHandler,
  getClientHandlerByParam,
  postClientHandler,
  putClientHandler,
  deleteClientHandler
};