import Image from 'next/image';
import style from './Post.modules.css';

const Home = () => {

  return (
    <main className={`${style.image}  `} >

      <Image src={'https://img.freepik.com/free-photo/freshness-nature-bounty-healthy-eating-vegetarian-food-variation-generated-by-artificial-intelligence_25030-60577.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais'} width={1400} height={800}>

      </Image>

      <div className='bg-[#FEECE2] '>
        <p className='text-3xl py-4 font-bold text-center'>Vegetable gallery</p>

        <div className=' grid md:grid-cols-3 py-10 gap-6 w-4/5 m-auto'>
          <Image src={'https://img.freepik.com/free-photo/food-vegetable-colorful-background-tasty-fresh-vegetables-wooden-table-top-view-with-copy-space_1220-1490.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais'} width={400} height={300}>

          </Image>
          <Image src={'https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38013.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais'} width={400} height={300}>

          </Image>
          <Image src={'https://img.freepik.com/free-photo/assortment-autumn-vegetables-with-copy-space_23-2148294684.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais'} width={400} height={300}>

          </Image>
          <Image src={'https://img.freepik.com/free-photo/assortment-various-vegetables_23-2148006278.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais'} width={400} height={300}>

          </Image>
          <Image src={'https://img.freepik.com/free-photo/healthy-vegetables-wooden-table_1150-38007.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais'} width={400} height={300}>

          </Image>
          <Image src={'https://img.freepik.com/free-photo/variety-vegetables-isolated-blue-table_114579-19958.jpg?size=626&ext=jpg&uid=R124603556&ga=GA1.1.152808567.1700245140&semt=ais'} width={400} height={300}>

          </Image>
        </div>

      </div>
    </main>
  );
}
export default Home;