<template>
	<div class="row">
	  <div class="row-content">Candon Campus</div>
	  <br>
	  <div class="list">
		  <ul>
			  BACHELOR OF SCIENCE IN TOURISM MANAGEMENT
		  </ul>
	  </div>
	  <div class="description">
		  Program Description:
	  </div>
	  <div class="text-description">
		  <strong>Bachelor of Science in Tourism Management</strong> highly skilled and globally competitive graduates imbued with values and virtues
possessing a deep sense of commitment towards the improvement of the quality of
life of the people and the communities.
	  </div>
	  <div class="description">
		  Program Outcomes:
	  </div>
	  <div class="text-description">
		  At the end of the Program, the <strong>BSTM</strong> graduate should be able to:
	  </div>
	  <div class="outcome-sub">		<ol type="a">
			<li>Demonstrate mastery and comprehension of the major, relevant and emerging
theories and perspectives in the travel and tourism industry.</li>
			<li>Perform frontline services with professionalism and excellence in accordance to local
and international standards.</li>
			<li>Execute effective managerial skills in the different sectors of the tourism industry.</li>
			<li>Formulate and implement well designed tours, tour itineraries and tour guiding
activities.</li>
			<li>Develop destination marketing and promotional strategies which incorporate
adaptability and sustainability.</li>
			<li>Conduct tourism research and academic outputs that are relevant to tourism laws
and current issues.</li>
			<li>Design flexible and long-term tourism development plans for different site and event
attractions and tourism destinations.</li>
		</ol></div>
		  <div class="track">
			  <router-link to="/">Tourism Management Track</router-link>
		  </div>
  </div>
  </template>
  <script>
  export default {
	name: 'BachelorofScienceinTourismManagement'
  }
  </script>

  <style>
  .row {
	padding: 20px;
	font-size: 30px;
	font-weight: 30;
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }

  .row-content {
	text-align: center;
	color: rgb(0, 0, 0);
  }

  .list{
	  font-size: 35px;
	  font-weight: bold;
	  font-family: 'Roboto Condensed', sans-serif;
	  margin-left: 20px;
	  color: rgb(175, 93, 6);
	  margin-top: 10px;
  }

  .description{
	  padding: 10px;
	  font-size: 21px;
	  font-family: 'PT Sans Narrow', sans-serif;
	  margin-left: 30px;
	  font-weight: bold;
  }

  .text-description {
	  font-size: 20px;
	  text-align: justify;
	  font-family: 'Times New Roman', Times, serif;
	  margin-left: 55px;
	  margin-right: 50px;
  }

  .outcome-sub {
	  font-size: 20px;
	  text-align: justify;
	  font-family: 'Times New Roman', Times, serif;
	  margin-left: 97px;
	  margin-right: 50px;
  }

  .track{
	  font-size: 20px;
	font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }

  .track a{
	  text-decoration: none;
	  margin-left: 110px;
	  margin-right: 50px;
  }

  .track a:hover{
	  color: #a1900e;
  }
  </style>
