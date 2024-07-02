import { CoolController, BaseController } from '@cool-midway/core';
import { DemoBaseManageEntity } from '../../entity/manage'; 

/**
 * demo-manage
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoBaseManageEntity,
})
export class AdminDemoBaseManageController extends BaseController {}
