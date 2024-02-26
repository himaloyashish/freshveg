import Image from 'next/image';
import style from './Post.modules.css';

const Home =   () => {

  return (
    <main className={ `${style.image}  `} >

      <Image src={'https://img.freepik.com/free-photo/healthy-fresh-vegetable-salad-with-organic-ingredients-generated-by-ai_188544-27591.jpg?t=st=1708970133~exp=1708973733~hmac=6d29fc2ec305b076da5111180bd9ffa191e7621189b3d0236698bb08dbfb2d0d&w=1060'} width={1400} height={800}>

      </Image>
      <div>
        <p>lorem50</p>
      </div>
    </main>
  );
}
export default Home;