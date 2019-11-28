import React from 'react';
import {storiesOf} from '@storybook/react';
import List from '../List';

const ListContent = `<li>・請確認您填寫的資料是否正確，一旦訂單完成後，付款與物流方式皆無法修改。</li>
<li>・使用ATM轉帳，將依據銀行入帳日，依序進行出貨/排貨。</li>
<li>・每筆訂單所提供的「ATM專屬虛擬帳號」皆不同，若您欲使用本項服務，敬請放心進行匯款作業，安全又便利！</li>
<li>・若訂單內含預購、無庫存商品調貨時間請參考「商品平均調貨時間」。</li>
<li>・若您對取貨或付款的方式有疑問，請詳閱<a href="www">「購買說明」</a>。</li>
<li style="color: #000000">・請確認您已詳閱並瞭解本站<a href="www">「購買說明」</a>內容，訂單完成即表示您已同意其中的各項說明。</li>`

storiesOf('Atoms|List', module).add('default', () => <List ListContent={ListContent}/>);
