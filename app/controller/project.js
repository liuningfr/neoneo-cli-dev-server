'use strict';

const Controller = require('egg').Controller;

class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    ctx.body = 'your project';
  }
}

module.exports = ProjectController;
