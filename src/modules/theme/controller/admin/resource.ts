import { CoolController, BaseController } from '@cool-midway/core';
import { ThemeResourceEntity } from '../../entity/resource';

/**
 * 主题-资源
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ThemeResourceEntity
})
export class AdminThemeResourcesController extends BaseController {}
