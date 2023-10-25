<?php
// rander element form
comment_form(
    array(
        'class_form' => 'form-comment',
        'title_reply' => '',
        'fields' => array(
            'quality_rating' => '<div class="form-comment__wrapper">
                <div class="evaluations">
                  Оцінки
                </div>
                <div class="form-rating items">
                <div class="item">
                <span>Якість</span>
                <div class="rating-box">
                    <div class="rating-container quality">
                        <input type="radio" name="quality" value="5" id="quality-5"> <label for="quality-5"><span></span></label>
                        <input type="radio" name="quality" value="4" id="quality-4"> <label for="quality-4"><span></span></label>
                        <input type="radio" name="quality" value="3" id="quality-3"> <label for="quality-3"><span></span></label>
                        <input type="radio" name="quality" value="2" id="quality-2"> <label for="quality-2"><span></span></label>
                        <input type="radio" name="quality" value="1" id="quality-1"> <label for="quality-1"><span></span></label>
                    </div>
                </div>
            </div>',
            'quickness_rating' =>
                '<div class="item">
                <span>Швидкість</span>
                <div class="rating-box">
                    <div class="rating-container quickness">
                        <input type="radio" name="quickness" value="5" id="quickness-5"> <label for="quickness-5"><span></span></label>
                        <input type="radio" name="quickness" value="4" id="quickness-4"> <label for="quickness-4"><span></span></label>
                        <input type="radio" name="quickness" value="3" id="quickness-3"> <label for="quickness-3"><span></span></label>
                        <input type="radio" name="quickness" value="2" id="quickness-2"> <label for="quickness-2"><span></span></label>
                        <input type="radio" name="quickness" value="1" id="quickness-1"> <label for="quickness-1"><span></span></label>
                    </div>
                </div>
            </div>',
            'price_rating' =>
                '<div class="item">
                <span>Ціна</span>
                <div class="rating-box">
                    <div class="rating-container price">
                        <input type="radio" name="price" value="5" id="price-5"> <label for="price-5"><span></span></label>
                        <input type="radio" name="price" value="4" id="price-4"> <label for="price-4"><span></span></label>
                        <input type="radio" name="price" value="3" id="price-3"> <label for="price-3"><span></span></label>
                        <input type="radio" name="price" value="2" id="price-2"> <label for="price-2"><span></span></label>
                        <input type="radio" name="price" value="1" id="price-1"> <label for="price-1"><span></span></label>
                    </div>
                </div>
            </div>
            </div>',
            'author' =>
                '<input class="form-comment__name" id="author" name="author" type="text" placeholder="Ваше ім\'я *" required="required">',
            'email' =>
                '<input class="form-comment__email" id="email" name="email" type="email" placeholder="Email *" required="required">',

        ),
        'comment_field' => '<textarea class="form-comment__message" id="comment" name="comment" placeholder="Залиште ваш відгук" required="required"></textarea>',
        'label_submit' => 'Відправити',
        'submit_button' => '<button class="form-btn btn" type="submit" name="%1$s" id="%2$s" class="%3$s"><span>%4$s</span></button>',
    )
);
