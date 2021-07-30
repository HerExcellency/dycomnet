<link rel="stylesheet" href="<?php echo base_url(); ?>/assets/css/mycalculator.css">

<section class="calculator-section">
<div class="container  blint">
<div class="row">
        <div class="col-lg-5 col-md-6 col-sm-12 col-12">
            <h1 class="flay">Interest Estimator</h1>
            <div class="horizontal divider"></div>
            <p>Get an estimate of your interest in less than a minute</p>
            
                       <div class="row">
                            <div style="padding-bottom:4px;" class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="boxes-button ask calculator-box">
                                    <label class="lab"><h5>Plan</h5></label>
                                    <div class=" caret">
                                        <select onchange="myAmount()" class=" plan">
                                            <option value="quick">Reap Quick</option>
                                            <option value="plus">Reap plus</option>
                                            <option value="max">Reap Max</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class=" bid calculator-box">
                                    <label class=" lab"><h5>Frequency</h5></label>
                                    <div class=" caret">
                                        <select onchange="myAmount()" class=" frequency">
                                            <option value="1">Daily</option>
                                            <option value="7">Weekly</option>
                                            <option value="30">Monthly</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="">
                                    <label class="calculator-box"><h5>Duration</h5></label>
                                    <div class="mcd">
                                        <select onchange="myAmount()" class="duration">
                                            
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class=" total">
                                    <label class="calculator-box"><h5>Amount to Save</h5></label>
                                    <div class="input-group input-border">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text currency" data-value="ngn">ngn</div>
                                        </div>
                                        <input autocomplete="nope" class="order-amount money4" oninput="myAmount()" value="5000" placeholder="Amount to Save" type="number" style="width: 82%">
                                        
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                    
        </div>

                    <div class="col-lg-5 col-md-6 col-sm-12 col-12 flick">
                        <div class="calculator-pad">
                            <!-- <p class="total-bal">Total balance you'll earn with our online <br>savings account:</p>
                            <div class="cent totalreturn"></div> -->
                            <div class="blad">
                                <h6>Total Savings:</h6>
                                <p class="totalmoney"></p>
                            </div>
                            
                            <div class="horizontal divider"></div>
                        
                            <div class="blad">
                                <h6 style="margin-bottom: 0px">Total Interest:</h6>
                                <p class="totalinterest"></p>
                            </div>
                            
                            <!-- <div class="blad">
                                <h6>Total Savings:</h6>
                                <p class="totalmoney"></p>
                            </div> -->
                            <p class="total-bal">Total balance you'll earn with our online <br>savings account:</p>
                            <div class="cent totalreturn"></div>               
                        </div>  
                    </div>
    </div>
    </div>

</section>



<script src="<?php echo base_url(); ?>/assets/js/calculator.js"></script>
<script src="<?php echo base_url(); ?>/assets/js/changestate.js"></script>
