import React, {useState, useEffect} from 'react'
import Loader from '../../../utilities/loader/loader'
import SideMenu from '../../SideMenu/Main'
import { supabase } from '../../../supabase/supabase'
import NoBookmarksPage from '../NoBookmarks'
import Bookmark from '../Bookmark'
import { bookmarkType } from '../../../types/bookmarks'
import MobileViewSideMenu from '../../SideMenu/MobileView'
import './index.css'

const Bookmarks = () => {
    const [bookmarksData, setBookmarksData] = useState<any | bookmarkType[]>([])
    const [isBookmarksLoaded, setBookmarksLoadingStatus] = useState(true)

    const getBookmarksData = async () => {
        const {data, error} = await supabase.from("bookmarks").select()

        if (error?.code) {
            alert(error.message)
            setBookmarksLoadingStatus(true)
          } else {
            setBookmarksData(data)
            console.table(data)
            setBookmarksLoadingStatus(false)
          }
    }

    console.log(bookmarksData)

    useEffect(()=>{
        getBookmarksData()
    }, [])

    const updateBookmarkData = (id : any) => {
        setBookmarksData(bookmarksData.filter( (item : any) => item.bookmark_id !== id))
    }

  return (
    <div className='bookmarks-main-section'>
        <SideMenu />
        <div className="mobile-hamburger-menu">
          <MobileViewSideMenu />
        </div>
        <div className="bookmarks-section">
            <p className='bookmarks-heading'>Bookmarks</p>
            {
                isBookmarksLoaded ? <Loader /> : (
                    <div>
                        {
                            (bookmarksData.length===0) ? <NoBookmarksPage /> : (
                                <ul className="bookmarks-list">
                                   {
                                    bookmarksData.map((item : any) => (
                                        <Bookmark key={item.bookmark_id} bookmarkData={item} updateBookmarkData={updateBookmarkData} />
                                    ))
                                   } 
                                </ul>
                            )
                        }
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Bookmarks