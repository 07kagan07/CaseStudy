# Case Study

## Kullanılabilir Scriptler

Projeyi başlatmadan önce

### `npm install `

ile bütün gerekli paketleri indirelim.

Daha sonra json serverını başlatın.
3004 portunda olması önemli fetching işlemleri bu port üzerinde gerçekleşiyor.
Aşağıdaki gibi başlatabilirsiniz

### `json-server --watch data.json --port 3004`

### `npm start`

ile development ortamında projeyi açabilirsiniz.
Proje tarayacı üzerinde [http://localhost:3000](http://localhost:3000) linki üzerinde çalışıyor olacak.

Register olurken profil resminizi bir url üzerinden vermeniz gerekmekte.

username:kagan07
password:123456

olarak login olun veya register üzerinden yeni bir kullanıcı tanımlayıp uygulamayı kullanmaya başlayabilirsiniz.

Mainpage üzerinde Approve edişmiş postlar yayınlanmaktadır.
Bu postları likelayabilirsiniz, PostAction.js compenenti sayesinde likelar ve unLikelar direkt olarak db ye aktarılmaktadır.
Yorum ikonuna tıklayarak bu posta yazılımış yorumları görebilir ve yorum yazabilirsiniz.

AdminPage'in içinde Pending,Approved ve Cancelled statusune sahip postları görmektesiniz.
Buradaki postları incele butonu ile inceleyebilirsiniz. Ayrıca statusunu değiştirip yayına alabilir veya yayından kaldırabilirsiniz.
Approved statusune aldığınız postlar anlık olarak Mainpage üzerinde yayyınlanmaktadır.
