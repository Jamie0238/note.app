export default function Edit() {
  return (
    <div className='container'>
      <h2>노트 수정</h2>

      <form>
        <div>
          <label>제목</label>
          <input type='text' placeholder='제목...' />
        </div>

        <div>
          <label>내용</label>
          <textarea cols='30' rows='10' placeholder='내용....'></textarea>
        </div>

        <div>
          <button>취소하기</button>
          <button>수정하기</button>
        </div>
      </form>
    </div>
  )
}
