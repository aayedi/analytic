import { Injectable } from '@angular/core';
import { Editor } from '../models/editor';
import { EDITORS } from '../static/editors-data';
import { DATA } from '../static/data';
import { DateRange } from '../models/date-range';
import { Statistic } from '../models/statistic';
import { EditorSelectorItem } from '../models/editor-selector';
import { MediaSelectorItem } from '../models/media-selector';
import { Media } from '../models/media';

@Injectable()
export class EditorService {

  private editors: Editor[];
  private selectorEditors: EditorSelectorItem[] = [];

  constructor() { }

  getEditors(): Editor[] {
    this.editors = EDITORS as Editor[];
    return this.editors;
  }

  getSelectorEditors(): EditorSelectorItem[] {
    for (const editor of EDITORS) {
      const editorItem = new EditorSelectorItem();
      editorItem.label = editor.name;
      for (const media of editor.medias) {
        const mediaItem = new MediaSelectorItem();
        mediaItem.label = media.name;
        mediaItem.value = media;
        editorItem.items.push(mediaItem);
      }
      this.selectorEditors.push(editorItem);
    }

    return this.selectorEditors;
  }

  fetchDataByMedia(media: Media, dateRange: DateRange): Statistic[] {
    const stats: Statistic[] = [];
    let fromMonth: number;
    let fromYear: number;
    let toMonth: number;
    let toYear: number;

    fromMonth = dateRange.from.getMonth() + 1;
    fromYear = dateRange.from.getFullYear();
    toMonth = dateRange.to.getMonth() + 1;
    toYear = dateRange.to.getFullYear();

    for (let year = fromYear; year <= toYear; year++) {
      let monthStart = 1;
      let monthEnd = 12;
      if (year === fromYear) {
        monthStart = fromMonth;
      }
      if (year === toYear) {
        monthEnd = toMonth;
      }
      if (DATA.medias[media.name] && DATA.medias[media.name]['years'][year]) {
        const months = DATA.medias[media.name]['years'][year]['months'];
        for (let month = monthStart; month <= monthEnd; month++) {
          if (months[month]) {
            stats.push(new Statistic(
              year,
              months[month]['month'],
              months[month]['pages'],
              months[month]['visits']
            ));
          }
        }
      }
    }
    return stats;
  }

  fetchData(editor: Editor, dateRange: DateRange): Statistic[] {
    const stats: Statistic[] = [];
    let fromMonth: number;
    let fromYear: number;
    let toMonth: number;
    let toYear: number;

    fromMonth = dateRange.from.getMonth() + 1;
    fromYear = dateRange.from.getFullYear();
    toMonth = dateRange.to.getMonth() + 1;
    toYear = dateRange.to.getFullYear();

    for (let year = fromYear; year <= toYear; year++) {
      let monthStart = 1;
      let monthEnd = 12;
      if (year === fromYear) {
        monthStart = fromMonth;
      }
      if (year === toYear) {
        monthEnd = toMonth;
      }
      if (DATA.editorTotals && DATA.editorTotals[year]) {
        const months = DATA.editorTotals[year]['months'];
        for (let month = monthStart; month <= monthEnd; month++) {
          if (months[month]) {
            stats.push(new Statistic(
              year,
              months[month]['month'],
              months[month]['pages'],
              months[month]['visits']
            ));
          }
        }
      }
    }
    return stats;
  }
}
