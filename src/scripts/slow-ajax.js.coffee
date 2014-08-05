# When enabled, will add a delay to all AJAX calls of `base` +/- `range`.
# Will not delay less than 0 seconds.

nativeAjax = $.ajax

window.SlowAjax =
  activate: (base = 5000, range = 0) ->
    @min = base - range
    @max = base + range

    $.ajax = @ajax
    true

  deactivate: ->
    $.ajax = nativeAjax
    true

  ajax: (options) ->
    deferred = $.Deferred()

    _.delay(->
      deferred.resolve(options)
    , SlowAjax.random())

    deferred.then((options) ->
      nativeAjax(options)
    )

  random: ->
    result = Math.random() * (@max - @min) + @min
    if result < 0
      0
    else
      result
