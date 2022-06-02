'use strict';

const Controller = require('egg').Controller;
const mongodb = require('../utils/mongo');
class ProjectController extends Controller {
  async getTemplate() {
    const { ctx } = this;
    const data = await mongodb().query('project');
    ctx.body = data;
  }
}

module.exports = ProjectController;
