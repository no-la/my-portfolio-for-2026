import { css } from '@emotion/react';

/** @jsxImportSource @emotion/react */
const datas = {
  tf: {
    name: 'タクティカル・タクティクス',
    tags: [3, 4, 5, 6, 100, 102],
    summary: {
      thumbnail: 'images/tf-thumbnail.jpg',
      text: '株式会社f4samuraiのサマーインターンで制作したスマホ向けカードゲーム。',
    },
    detail: {
      text: [
        '株式会社f4samuraiのサマーインターンで作成したスマホ向けカードゲーム。',
        '7人チーム、3日間の開発で、私はフロントエンドエンジニアとして参加し、アウトゲームの実装を担当した。',
        'プランナーと共に「ゲームをより良くする」という視点から実装内容の選定をし、リーダーカードの詳細を表示するモーダルを実装した。（具体的には、左下、右上のボタン、モーダルと、その動作を実装した。それ以外のものは背景に画像として置いているだけ。また、デザインは別の方が担当した。）',
        'Reactでの開発、フロントエンドとしてのチーム開発、用意された開発環境での開発など、初めて経験することが多く、多くのことを学んだ。',
      ],
      duration: '3日',
      since: '2024/9/3',
      until: '2024/9/5',
      headcount: 7,
      links: [],
      images: [
        {
          type: 'video',
          mainSrc: 'videos/tf0-main.mp4',
          thumbnailSrc: 'images/tf1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/tf1-main.jpg',
          thumbnailSrc: 'images/tf1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/tf2-main.jpg',
          thumbnailSrc: 'images/tf2-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/tf3-main.jpg',
          thumbnailSrc: 'images/tf3-main.jpg',
        },
      ],
    },
  },
  im: {
    name: '画像ファイル管理アプリ',
    tags: [0, 3, 4, 5, 100],
    summary: {
      thumbnail: 'images/im-thumbnail.jpg',
      text: 'タグ付けによって画像ファイルを管理するGUIアプリ。',
    },
    detail: {
      text: [
        '画像ファイルをタグ付けによって多次元的に管理するGUIアプリ。',
        '趣味でイラストを描く際の参考資料を管理する方法を考えていたとき、ディレクトリ構造では不十分だと思い、タグ付けによって管理するこのアプリを作った。',
        '課題としては、「欲しい画像がすぐに見つけられる」「実際にアプリを使って画像を管理するのが面倒でない」の2つがあった。前者のために、タグ付けとタグによる検索機能、日付によるソート機能などを実装した。後者については、選択した画像をまとめてタグ編集をする機能を実装したり、画像追加をドラッグアンドドロップで出来るようにした。',
        'JavaScript/HTML/CSSの練習も兼ねて開発していたことと、長く使うアプリになると判断したため、ある程度技術力を身につけてから本格的な実装をしようと考えて、デモ程度の実装にとどめた。',
        '将来的には、技術スタックの見直しから始め、動画、音声、テキストファイルへの対応や、UI/UXの向上などもしたい。',
      ],
      duration: '約2週間',
      since: '2023/9',
      until: '2023/9',
      headcount: 1,
      links: [],
      images: [
        {
          type: 'video',
          mainSrc: 'videos/im0-main.mp4',
          thumbnailSrc: 'images/im-thumbnail.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/im1-main.jpg',
          thumbnailSrc: 'images/im1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/im2-main.jpg',
          thumbnailSrc: 'images/im2-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/im3-main.jpg',
          thumbnailSrc: 'images/im3-main.jpg',
        },
      ],
    },
  },
  tr: {
    name: '日記&タスク記録アプリ',
    tags: [0, 3, 4, 5, 100],
    summary: {
      thumbnail: 'images/tr-thumbnail.jpg',
      text: '「〇時から〇時まで～をした」という記録ができる日記アプリ。',
    },
    detail: {
      text: [
        '日記アプリにタスク管理・記録機能を加えたGUIアプリ。',
        '「〇時から〇時まで～をしていた」という行動の記録ができるiPhoneのアプリ「TIME HACKER」を使っていたが、PCで使いたい、より詳細な情報も一緒に記録したいと思い、このアプリを作った。',
        '初め、慣れていたPythonで作ろうとしたが、見た目を作るのが難しいという問題があった。この問題を解決するために、JavaScript/HTML/CSSを利用することを考え、Eelというライブラリを導入した。',
        'JavaScript/HTML/CSSを使っての本格的なアプリ開発はこれが初めてで、基礎的なことを多く学んだ。また、表示する情報の整理やワイヤーフレームの設計が不十分だったせいで、画面がごちゃついてしまったり、追加したい機能を上手く配置できなかったりという問題があり、実装前の準備の大切さを知った。',
        '※一部に「VOICEVOX：冥鳴ひまり」を使用しています。',
      ],
      duration: '1ヶ月',
      since: '2023/4',
      until: '2023/5',
      headcount: 1,
      links: [],
      images: [
        {
          type: 'video',
          mainSrc: 'videos/tr0-main.mp4',
          thumbnailSrc: 'images/tr1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/tr1-main.jpg',
          thumbnailSrc: 'images/tr1-main.jpg',
        },
      ],
    },
  },
  dm: {
    name: 'だっかん！モンスターの島',
    tags: [1, 101, 200, 201, 301, 302],
    summary: {
      thumbnail: 'images/dm-thumbnail.jpg',
      text: '2Dタワーディフェンスゲーム。2人のチーム開発で、素材から全て自作した。',
    },
    detail: {
      text: [
        '自陣からキャラクターを出撃させて敵の城を制圧する2Dタワーディフェンスゲーム。キャラクターが進むルートを指定でき、進んだルートの形によってスキルが発動するところが一番の特徴。',
        '趣味の延長でゲーム制作に興味があったところ、偶然、ゲーム制作に興味を持っている友人に出会い、一緒にこのゲームを制作した。',
        '私も友人もイラストやDTMが趣味だったこともあり、アセットは使用せずにイラストやBGMなどからすべて自分たちで作った。私の担当はプログラミング、キャラクターデザイン、イラスト、エフェクト、UIデザインなどで、プログラミングでは主に、ルート指定、スキル、UIまわりの実装を担当した。',
        'シーンごとにトランジションを用意したり、ゲームの世界観を元に遊び心のあるUIを作ったり、ステージごとにパーティクルを出したりと、ゲーム全体を通して細かいところにまでこだわって制作した。',
      ],
      duration: '8ヶ月',
      since: '2021/11',
      until: '2022/7',
      headcount: 2,
      links: [
        <iframe
          key={0}
          src="https://store.steampowered.com/widget/2147230/"
          frameBorder="0"
          width="646"
          height="190"
          css={css`
            max-width: 100%;
          `}
        ></iframe>,
      ],
      images: [
        {
          type: 'video',
          mainSrc: 'videos/dm0-main.mp4',
          thumbnailSrc: 'images/dm-thumbnail.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/dm1-main.jpg',
          thumbnailSrc: 'images/dm1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/dm2-main.jpg',
          thumbnailSrc: 'images/dm2-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/dm3-main.jpg',
          thumbnailSrc: 'images/dm3-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/dm4-main.jpg',
          thumbnailSrc: 'images/dm4-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/dm5-main.jpg',
          thumbnailSrc: 'images/dm5-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/dm6-main.jpg',
          thumbnailSrc: 'images/dm6-main.jpg',
        },
      ],
    },
  },
  ms: {
    name: 'まいんすいーぱー',
    tags: [1, 101, 200, 201, 300],
    summary: {
      thumbnail: 'images/ms-thumbnail.jpg',
      text: 'マインスイーパーの模写。ロゴ、SE、BGMなどを自作した。',
    },
    detail: {
      text: [
        'マインスイーパーの模写。ロゴ、SE、BGMなどを自作した。',
        'もともとマインスイーパーが好きだったこともあり、数日時間ができた際に腕試しで作った。付随して、UnityのWebGLビルド、自作フォントの導入を試したり、ロゴ、SE、BGM制作なども行った。',
      ],
      duration: '3日',
      since: '2022/3',
      until: '2022/3',
      headcount: 1,
      links: ['https://no-la.github.io/MineSweeper/'],
      images: [
        {
          type: 'video',
          mainSrc: 'videos/ms0-main.mp4',
          thumbnailSrc: 'images/ms1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/ms1-main.jpg',
          thumbnailSrc: 'images/ms1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/ms2-main.jpg',
          thumbnailSrc: 'images/ms2-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/ms3-main.jpg',
          thumbnailSrc: 'images/ms3-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/ms4-main.jpg',
          thumbnailSrc: 'images/ms4-main.jpg',
        },
      ],
    },
  },
  db: {
    name: 'Discord何でもBot',
    tags: [0, 100, 102],
    summary: {
      thumbnail: 'images/db-thumbnail.jpg',
      text: '自分のDiscordサーバーで使うための何でもBot。',
    },
    detail: {
      text: [
        'Discordサーバーの管理からミニゲームの進行まで、何でもするBot。',
        '友人を集めたDiscordサーバーを運用していたが、チャンネル数が多くなるにつれて自分一人で管理することに限界を感じ、discord.pyを使ってこのBotを作った。',
        '現在までゆるく開発を続けていて、メンバーの誕生日を祝う機能、マルコフ連鎖で生成した文章を返すコマンド、許可したチャンネルにのみ有効な「チャンネル削除」コマンド、数字当てゲームやワード人狼、Itoといったボードゲームの進行なども実装した。',
        '2024/2頃に開発への参加の申し出があり、開発体制の見直しとして、ディレクトリ構成の変更、pytestの導入、ユーティリティ関数の作成、discord.pyのCogを使う方法への変更を含めたリファクタリングなどをした。それに伴い、新機能追加時に必要なファイルをそれぞれのテンプレートをもとに生成するスクリプト、プロジェクトの説明をするmdファイル、実際に手を動かして新機能の追加をするチュートリアルなどを作成した。',
        '本格的な開発をするのはこのBotが初めてだったので、Python、ひいてはプログラミングの基礎を学んだり、ドキュメントを読む力を身につけたり、その後の土台となる部分を多く学んだ。',
      ],
      duration: '6ヶ月程度',
      since: '2021/6',
      until: '',
      headcount: 1,
      links: [],
      images: [
        {
          type: 'image',
          mainSrc: 'images/db0-main.jpg',
          thumbnailSrc: 'images/db0-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/db1-main.jpg',
          thumbnailSrc: 'images/db1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/db2-main.jpg',
          thumbnailSrc: 'images/db2-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/db3-main.jpg',
          thumbnailSrc: 'images/db3-main.jpg',
        },
      ],
    },
  },
  yu: {
    name: 'よみうた',
    tags: [3, 4, 5, 100, 102, 200],
    summary: {
      thumbnail: 'images/yu-thumbnail.jpg',
      text: '入力した俳句に背景画像を付けるシンプルなWebアプリ。',
    },
    detail: {
      text: [
        '入力した俳句に事前に用意された背景画像を付けるWebアプリ。',
        '以前利用していた「うたよみん」というサービスが終了してしまい、中でも気に入っていた「テキストボックスに俳句を入力したら良い感じの背景画像を付けてくれる」機能が欲しくてこのアプリを作った。',
        '描画にはCanvas2Dを使っていて、ユーザーが保存できるように描画結果をimg要素に変換して表示している。描画した画像をX(Twitter)に直接投稿できる機能を用意したかったが、Twitter APIが必要なようで断念し、投稿画面に飛ぶボタンを設置するだけに留めた。',
        '表現の幅を広げるために色々なパターンの背景画像を用意した。それに伴い、背景画像によって文字色の白黒を切り替えるようにしている。',
        '「～」 「－」 「。」 「（」 など、そのまま描画しても縦書きにならない文字にもある程度対応した。具体的には、これらの文字に対しては 90° の回転と細かい位置調整をしている。',
        'この開発では、Canvas2Dの基本的な操作を学んだ。',
      ],
      duration: '2週間',
      since: '2023/6/30',
      until: '2023/7/12',
      headcount: 1,
      links: ['https://no-la.github.io/utayomi/'],
      images: [
        {
          type: 'video',
          mainSrc: 'videos/yu0-main.mp4',
          thumbnailSrc: 'images/yu1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/yu2-main.jpg',
          thumbnailSrc: 'images/yu2-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/yu3-main.jpg',
          thumbnailSrc: 'images/yu3-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/yu1-main.jpg',
          thumbnailSrc: 'images/yu1-main.jpg',
        },
      ],
    },
  },
  np: {
    name: "nola's portfolio",
    tags: [3, 4, 5, 6, 100, 102, 103, 104, 200, 202],
    summary: {
      thumbnail: 'images/np-thumbnail.jpg',
      text: 'このサイト。',
    },
    detail: {
      text: [
        'このポートフォリオサイト。',
        'インターンのためにReactを勉強したことと、実際にインターンでフロントエンドについて学んだことをアウトプットしたいと思い、以前から構想があったポートフォリオサイトを作った。',
        '目的やコンセプトの整理から始め、Figmaを用いてワイヤーフレームを作り実装する、色やタイポグラフィを考えて、デザインを決めていく、というように各工程を意識して開発を進めた。',
      ],
      duration: '2週間',
      since: '2024/9/12',
      until: '2024/9/29',
      headcount: 1,
      links: [
        'https://github.com/no-la/my-portfolio-for-2026',
      ],
      images: [
        {
          type: 'image',
          mainSrc: 'images/np0-main.jpg',
          thumbnailSrc: 'images/np0-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/np1-main.jpg',
          thumbnailSrc: 'images/np1-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/np2-main.jpg',
          thumbnailSrc: 'images/np2-main.jpg',
        },
        {
          type: 'image',
          mainSrc: 'images/np3-main.jpg',
          thumbnailSrc: 'images/np3-main.jpg',
        },
      ],
    },
  },
};

export default datas;
