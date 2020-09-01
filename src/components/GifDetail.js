import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleGif } from '../store/actions/giffyAction';

const GifDetail = () => {
  const [copyURL, setCopyURL] = useState(false);
  const [copyMP4, setCopyMP4] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = useSelector((state) => state.giffy.singleData);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchSingleGif(id, setLoading));
  }, [dispatch, id]);

  const fallbackCopyText = (text) => {
    // craete a textarea
    let textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-999999px';
    document.body.appendChild(textArea);
    const selected =
      document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    textArea.select();
    try {
      const successful = document.execCommand('copy');
      const msg = successful ? 'successful' : 'unsuccessful';
      console.log('Fallback: copying text command was ' + msg);
    } catch (err) {
      console.log('Fallback: Oops, unable to copy ' + err);
    }

    document.body.removeChild(textArea);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }
  };

  const copyURLToClipboard = () => {
    const copyText = document.querySelector('.gifUrl');
    if (!navigator.clipboard) {
      fallbackCopyText(copyText.innerText);
      setCopyURL(true);
      setTimeout(() => setCopyURL(false), 1000);
      return;
    }
    navigator.clipboard.writeText(copyText.innerText).then(
      () => {
        console.log('Async: copying to clipboard was successfully');
        setCopyURL(true);
        setTimeout(() => setCopyURL(false), 1000);
      },
      function (err) {
        console.log('Async, could not copy text: ', err);
      }
    );
  };

  const copyMP4ToClipboard = () => {
    const copyText = document.querySelector('.mp4Url');
    if (!navigator.clipboard) {
      fallbackCopyText(copyText.innerText);
      setCopyMP4(true);
      setTimeout(() => setCopyMP4(false), 1000);
      return;
    }
    navigator.clipboard.writeText(copyText.innerText).then(
      () => {
        console.log('Async: copying to clipboard was successfully');
        setCopyMP4(true);
        setTimeout(() => setCopyMP4(false), 1000);
      },
      function (err) {
        console.log('Async, could not copy text: ', err);
      }
    );
  };

  return (
    <div className='container my-5'>
      {loading ? (
        <h2>Loading...</h2>
      ) : data ? (
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img
              src={data.images.downsized_large.url}
              alt=''
              style={{
                width: '480px',
                height: '506.374px',
                left: '0px',
                top: '0px',
                opacity: '1',
              }}
            />
          </div>

          <div className='col-12 col-md-6'>
            <h2 className='text-capitalize font-weight-bold'>{data.title}</h2>

            <p>Share with friend </p>

            <div>
              <i className='fas fa-link'></i>

              <div className='flex-url'>
                <div className='horizontal-scroll mr-2'>
                  <p className='urlFont gifUrl'>{data.images.original.url}</p>
                </div>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={copyURLToClipboard}
                >
                  <i className='fas fa-copy mr-2'></i>
                  <div>{copyURL ? 'COPIED' : 'COPY'}</div>
                </button>
              </div>
            </div>
<br/>
            <div>
              mp4

              <div className='flex-url'>
                <div className='horizontal-scroll mr-2'>
                  <p className='urlFont mp4Url'>{data.images.original.mp4}</p>
                </div>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={copyMP4ToClipboard}
                >
                  <i className='fas fa-copy mr-2'></i>
                  <div>{copyMP4 ? 'COPIED' : 'COPY'}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default GifDetail;
