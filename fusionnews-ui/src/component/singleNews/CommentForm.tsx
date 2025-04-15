import React from 'react'

const CommentForm = () => {
  return (
    <div className="mb-3">
                        <div className="section-title mb-0">
                            <h4 className="m-0 text-uppercase font-weight-bold">Leave a comment</h4>
                        </div>
                        <div className="bg-white border border-top-0 p-4">
                            <form>
                                <div className="form-row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="name">Name *</label>
                                            <input type="text" className="form-control" id="name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <input type="url" className="form-control" id="website"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" cols={30} rows={5} className="form-control"></textarea>
                                </div>
                                <div className="form-group mb-0">
                                    <input type="submit" value="Leave a comment"
                                        className="btn btn-primary font-weight-semi-bold py-2 px-3"/>
                                </div>
                            </form>
                        </div>
                    </div>
  )
}

export default CommentForm