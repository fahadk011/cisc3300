<?php


require('../app/setup.php');

use app\models\ExperienceModel;
use app\models\ModelException;
use app\models\TypeConverter;
use app\models\ContactModel;

// $experience = new ExperienceModel();
// $experience->setTitle("text title1");
// $experience->setDesignation("test designation");
// $experience->setLocation("test location");
// $experience->setDateJoin(TypeConverter::toDateTime('2023-05-01',TypeConverter::ISO_DATE));
// $experience->setDateLeave(TypeConverter::toDateTime('2024-10-01', TypeConverter::ISO_DATE));

// print_r($experience->save());

// print_r($experience->fetchOneMatchAllCondition(['id' => 4]));

$c = new ContactModel();
// $c->name = "Rohan Sk";
// $c->email = "example@email.com";
// $c->message = "this is a message";

print_r($c->fetchAll());

?>