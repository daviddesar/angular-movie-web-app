import {NgModule} from '@angular/core'
import {BtContentComponent} from './bt-content/bt-content.component'
import {BtDetailComponent} from './bt-detail/bt-detail.component'
import {BtDetailItemComponent} from './bt-detail-item/bt-detail-item.component'

@NgModule({
    // chứa các cpn mà module này quản lý
    declarations: [BtContentComponent, BtDetailComponent, BtDetailItemComponent],
    // danh sách module gắn vào để sử dụng trong module này
    imports: [],
    // danh sách các component muốn sử dụng ở module khác
    exports: [BtContentComponent, BtDetailComponent, BtDetailItemComponent]
})
export class Detail {}