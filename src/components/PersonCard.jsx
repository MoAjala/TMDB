import React from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'react-bootstrap'
export default function PersonCard({
    id,
    name,
    profile_path
}) {
    
  return (
    <div className='mediacard'>
        <div className='cast'>
            <Link to={`/person/${id}`}
            >
                 <Image
            src={`http://image.tmdb.org/t/p/w500/${profile_path}`}
            className="img-fluid"
            alt={name}
            title={name}
            loading="lazy"
          />
            </Link>
            <Link to={`/movie/${id}`}>
            <p className="text-white small fw-bold mb-0">{name}</p>
          </Link>
        </div>
    </div>
  )
}
