import Controller from './controller.js';
import UserInterface from './userInterface.js';

const userI = new UserInterface();
const controller = new Controller(userI);
controller.init();
