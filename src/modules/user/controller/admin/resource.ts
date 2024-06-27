import { CoolController, BaseController } from '@cool-midway/core';
import { UserResourceEntity } from '../../entity/resource';

/**
 * 用户-资源
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: UserResourceEntity
})
export class AdminUserResourceController extends BaseController { }
