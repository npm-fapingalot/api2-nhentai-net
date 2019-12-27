import { ID } from '../manga';

/**
 * The object used to describe manga list elements. Ie the home screen, ...
 */
export interface IPrevManga {
  /**
   * The id of the manga
   */
  id: ID;

  /**
   * The thumbnail image
   */
  thumbnail: string;

  /**
   * The title of the manga
   */
  title: string;
}
