import { CoolController, BaseController } from '@cool-midway/core';
import { ThemeBaseInfoEntity } from '../../entity/info';

/**
 * 主题-基地信息
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: ThemeBaseInfoEntity
})
export class AdminThemeBaseInfosController extends BaseController {}
