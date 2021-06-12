import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuote } from '../../features/quote/quoteSlice';
import './Quote.css'

export function Quote() {
  const {quote, author} = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuote());
  }, [dispatch]);

  return(
    <div id="quote">
      <p className="quote-message">"{quote}"</p>
      <p className="quote-author">{author}</p>
    </div>
  )
}
