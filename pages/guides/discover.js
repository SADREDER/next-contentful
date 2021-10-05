import { createClient } from 'contentful';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'guide' });

  return {
    props: {
      guides: res.items,
    },
  };
}

export default function Discover({ guides }) {
  console.log(guides);
  return (
    <div>
      <h1>{guides[0].fields.guideTitle}</h1>
      <ReactMarkdown>{guides[0].fields.guideSection}</ReactMarkdown>

      <p>
        아래는 Contentful CMS에서 이미지만 별도로 쿼리하여 next/image 컴포넌트로
        표시한 이미지이다.
      </p>
      <Image
        src={'https:' + guides[0].fields.image.fields.file.url}
        alt='system UI'
        width={guides[0].fields.image.fields.file.details.image.width}
        height={guides[0].fields.image.fields.file.details.image.height}
      />

      <p>
        아래는 Cloudinary에서 이미지만 가져와 next/image 컴포넌트를 사용하여
        표시한 이미지이다.
      </p>
      <Image
        src='https://res.cloudinary.com/dfya1nsbj/image/upload/v1632899865/webOS_TV_6.0_Home_rzgbqn.png'
        alt='system UI from Cloudinary'
        width='915'
        height='514'
      />

      <p>
        아래는 사이트 public 폴더에 이미지를 저장하고, next/image 컴포넌트를 사용하여
        표시한 이미지이다.
      </p>
      <Image
        src='/../public/webOS_TV_6.0_Home.png'
        alt='system UI from public folder'
        width='915'
        height='514'
      />

      <p>
        아래는 Cloudinary에서 이미지만 가져와 next/image 컴포넌트 사용 없이
        표시한 이미지이다.
      </p>
      <img
        src='https://res.cloudinary.com/dfya1nsbj/image/upload/v1632899865/webOS_TV_6.0_Home_rzgbqn.png'
        alt='system UI from Cloudinary'
        width='915'
        height='514'
      />

      <p>
        아래는 Cloudinary에서 Automatic-good 설정으로 수정한 이미지를 가져와
        next/image 컴포넌트 사용 없이 표시한 이미지이다.
      </p>
      <img
        src='https://res.cloudinary.com/dfya1nsbj/image/upload/q_auto:good/v1632899865/webOS_TV_6.0_Home_rzgbqn.png'
        alt='system UI from Cloudinary'
        width='915'
        height='514'
      />
    </div>
  );
}
