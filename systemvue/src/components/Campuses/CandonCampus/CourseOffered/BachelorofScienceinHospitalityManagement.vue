<template>
  <div class="row">
    <div class="row-content">Candon Campus</div>
	<div class="list">
		<ul>
			BACHELOR OF SCIENCE IN HOSPITALITY MANAGEMENT
		</ul>
	</div>
	<hr>
	<div class="description">
		Program Description:
	</div>
	<div class="text-description">
		<strong>Bachelor of Science in Hospitality Management</strong> highly skilled and globally competitive graduates imbued with values and virtues
possessing a deep sense of commitment towards the improvement of the quality of
life of the people and the communities.
	</div>
	<div class="description">
		Program Outcomes:
	</div>
	<div class="text-description">
		At the end of the Program, the <strong>BSHM</strong> graduate should be able to:
	</div>
	<div class="outcome-sub">
		<ol type="a">
			<li>Develop globally and locally competitive entrepreneurs and managers in the
				hospitality industry.</li>
			<li>Produce economically efficient entrepreneurs who are able to meet the demands of
the local and international hospitality industry.</li>
			<li>Train professionals and entrepreneurs imbued with professional ethical standards
responding to the needs of stakeholders in the hospitality industry.</li>
			<li>Develop workers and supervisors of the lodging industry as future leaders</li>
			<li>Apply effectively management skills in food service operations in achieving
customers satisfaction and expectations.</li>
			<li>Pursue advanced studies along their field of specialization to meet the ever-changing
demands of the hospitality industry.</li>
			<li>Select the proper decision-making tools to critically, analytically and creatively solve
problems and drive results.</li>
			<li>Apply information and communication technology skills as required by the business
environment.</li>
			<li>Work effectively with other stakeholders and manage conflict in the workplace.</li>
			<li>Plan and implement business related activities</li>
			<li>Demonstrate corporate citizenship and social responsibility.</li>
			<li>Exercise high personal moral and ethical standards.</li>
		</ol></div>
		<div class="track">
			<router-link to="/">Hospitality Management Track</router-link>
		</div>
</div>
</template>

<script>
export default {
  name: 'BachelorofScienceinInformationTechnology'
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
