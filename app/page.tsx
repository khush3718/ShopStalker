import Searchbar from '@/components/Searchbar'
import Image from 'next/image'

const Home = () => {
  return (
    <>
      <section className="px-6 md:px-20 py-24 border-2 border-gray-950">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
                Smart Shopping starts here:
                <Image 
                  src="/assets/icons/arrow-right.svg"
                  alt="arrow-right"
                  width={16}
                  height={16}
                />
            </p>
            <h1 className='head-text'>
              Unleash the Power of 
              <span className='text-primary'> ShopStalker</span> 
            </h1>
            <p className='mt-6'>
              ShopStalker is a price tracking tool that helps you save money by notifying you when your favorite products drop in price.
            </p>
            <Searchbar />
          </div>
          hero carousel
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
                    {['Iphone','manga','condoms'].map((product) => (
                      <div>{product}</div>
                    ))}
                  </div>
                </section>
              </>
            )
          }
          export default Home

