import { CoolController, BaseController } from '@cool-midway/core';
import { BaseManagementEntity } from '../../entity/management';

/**
 * 基地-信息管理
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: BaseManagementEntity
})
export class AdminBaseManagementsController extends BaseController { }
