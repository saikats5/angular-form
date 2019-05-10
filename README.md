# angular-form

anagular attached ngForm by default when it comes across form tag which gives us imfo about the form, helps in validation

form value doesn't get tracked by default to make it tracked we have to use ngModel on each form element and add 'name' attribute to make it work

Track control state and validity


state                                  Class if true         Class if flase
================================================================================
The control has been visited           ng-touched            ng-untouched
The control's value has changed        ng-dirty              ng-pristine
The control's value is valid           ng-valid              ng-invalid

Template ref points to dom to access touched/untouched... #name="ngModel" then name.touched

userForm.form.valid --> for whole form

class="form-group" --> class="form-control"

Reactive --> more control over validation logic, good for complex forms, unit testable
Template-driven --> good for simple forms, simple validations, easier to create, less code




