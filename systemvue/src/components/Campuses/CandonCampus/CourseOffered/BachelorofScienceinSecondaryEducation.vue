<template>
	<div class="row">
	  <div class="row-content">Candon Campus</div>
	  <br>
	  <div class="list">
		  <ul>
			  BACHELOR OF SCIENCE IN SECONDARY EDUCATION
		  </ul>
	  </div>
	  <div class="description">
		  Program Description:
	  </div>
	  <div class="text-description">
		  <strong>Bachelor of Secondary Education</strong> is an undergraduate teacher education
		  program designed to equip learners with adequate and relevant competencies to
		  teach in their chosen area of specialization/ major in the secondary level.
		  <br>
		  The BSED degree program aims to develop highly motivated and competent teachers
		  specializing in the content and pedagogy for secondary education.
	  </div>
	  <div class="description">
		  Program Outcomes:
	  </div>
	  <div class="text-description">
		  At the end of the Program, the <strong>BSED</strong> graduate should be able to:
	  </div>
	  <div class="outcome-sub">		<ol type="a">
			<li>Articulate and discuss the latest development in the specific field of practice;</li>
			<li>Communicate effectively in oral and in written forms in both English and Filipino;</li>
			<li>Work effectively and independently in multi-disciplinary and multicultural teams;</li>
			<li>Act in accordance to professional, social, and ethical responsibility;</li>
			<li>Preserve and promote “Filipino historical and cultural heritage”</li>
		</ol></div>
		  <div class="track_1">
			Secondary Education Track:
		  </div>
		  <div class="major-track">
				<section>
					<ul>
						<li><router-link to="/">Filipino</router-link></li>
					</ul>
				</section>
				</div>
  </div>
  </template>
  <script>
  export default {
	name: 'BachelorofScienceinSecondaryEducation'
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

  .track_1{
	padding-left: 90px;
	font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.major-track {
	margin-left: 40px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.major-track a:hover {
  color: #a1900e;
}

.major-track a {
  text-decoration: none;
  font-size: 20px;
}

.major-track ul{
	padding-left: 120px;
}
  </style>
