import React from "react"



//This component will handle choosing a track from the list
//It passes the chooseTrack-function and track-variable
export default function TrackSearchResult({ track, chooseTrack }) {

  /*--------------------------------------------------------------------------------------------------------------------
   When clicking the list of image it will trigger this function to pass the track to the function chooseTrack which is being passed from Dashboard-component 
  --------------------------------------------------------------------------------------------------------------------*/
  function handlePlay() {
    chooseTrack(track)
  }

  return (
    <div
      className="m-3 align-items-center"
      style={{ cursor: "pointer" }}
      onClick={handlePlay}
    >
      <img src={track.albumUrl} style={{ height: "100px", width: "100px" }} />
      <div className="ml-3">
        <div>{track.title}</div>
        <div className="text-muted">{track.artist}</div>
      </div>
    </div>
  )
}